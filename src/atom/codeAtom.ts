import { atom, selector } from "recoil";

export const htmlAtom = atom({
  key: "htmlState",
  default: "",
});

export const jsAtom = atom({
  key: "jsState",
  default: "",
});

export const encodedUriSelector = selector<[string, string]>({
  key: "encodedUri",
  get: ({ get }) => {
    const encodedHtml = encodeURIComponent(get(htmlAtom));
    const encodedJs = encodeURIComponent(get(jsAtom));
    return [encodedHtml, encodedJs];
  },
});

export const vueliteVersionAtom = atom({
  key: "vueliteVersion",
  default: "@latest",
});

export const srcDocSelector = selector({
  key: "srcDocState",
  get: ({ get }) => {
    const html = get(htmlAtom);
    const js = get(jsAtom);
    const versoin = get(vueliteVersionAtom);
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

export const encodedSrcDocSelector = selector({
  key: "encodedSrcDoc",
  get: ({ get }) => {
    const srcDoc = get(srcDocSelector);
    return encodeURIComponent(srcDoc);
  },
});
