import { atom, selector } from "recoil";

export const htmlState = atom({
  key: "htmlState",
  default: "",
});

export const jsState = atom({
  key: "jsState",
  default: "",
});

export const encodedUriState = selector<[string, string]>({
  key: "encodedUri",
  get: ({ get }) => {
    const encodedHtml = encodeURIComponent(get(htmlState));
    const encodedJs = encodeURIComponent(get(jsState));
    return [encodedHtml, encodedJs];
  },
});

export const vueliteVersion = atom({
  key: "vueliteVersion",
  default: "@latest",
});

export const srcDocState = selector({
  key: "srcDocState",
  get: ({ get }) => {
    const html = get(htmlState);
    const js = get(jsState);
    const versoin = get(vueliteVersion);
    return `  
    <html>
        <head><script src="https://unpkg.com/vue-lite-js${versoin}"></script></head>
        <script>
          const _log = console.log;
          console.log = function (...rest) {
            window.parent.postMessage({ source: "iframe", message: rest }, "*" );
            // _log.apply(console, arguments);
          };
        </script>
        <body>${html}</body>
        <script>
          for (const key in Vuelite) {
              if (Vuelite.hasOwnProperty(key)) {
                  window[key] = Vuelite[key];
              }
          }
          window.Vuelite = Vuelite.default
          ${js}
        </script>
    </html>`;
  },
});
