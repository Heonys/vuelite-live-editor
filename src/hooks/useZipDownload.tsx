import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useRecoilValue } from "recoil";
import { htmlState, jsState } from "@/atom/codeAtom";

export const useZipDownload = () => {
  const html = useRecoilValue(htmlState);
  const js = useRecoilValue(jsState);

  const downloadProject = async () => {
    const zip = new JSZip();

    zip.file(
      "index.html",
      `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vitelite App</title>
    <script defer type="module" src="main.js"></script>
  </head>
  <body>
    ${html}
  </body>
</html>`,
    );
    zip.file(
      "main.js",
      `import Vuelite from "vue-lite-js";

${js}`,
    );
    zip.file(
      "package.json",
      `{
  "name": "vuelite-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.4.8"
  },
  "dependencies": {
    "vue-lite-js": "^2.1.7"
  }
}`,
    );
    zip.file(
      "README.md",
      `# Vuelite Starter (Vite-based Template)

## Installation

\`\`\`sh
npm install
npm run dev

# if using yarn:
yarn
yarn dev

# if using pnpm:
pnpm install
pnpm run dev
\`\`\``,
    );

    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "vuelite-project.zip");
    });
  };

  return { downloadProject };
};
