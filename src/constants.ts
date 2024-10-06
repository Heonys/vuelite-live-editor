export type FileTypes = "javascript" | "css" | "html";

export const CODE_SNIPPETS: { [K in FileTypes]: string } = {
  html: `<body>\n    <h1>Hello World</h1>\n    <p>This is a sample paragraph.</p>\n</body>`,
  css: `<style>\n    body { font-family: Arial, sans-serif; background-color: #f0f0f0; color: #333; }\n    h1 { color: #007bff; }\n    p { font-size: 16px; }\n</style>`,
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
};
