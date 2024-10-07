export type FeatureNames =
  | "v-bind"
  | "v-model"
  | "another-directive"
  | "directive-shortcut"
  | "inline-format-bind"
  | "template-syntax"
  | "expression-support"
  | "conditional-rendering"
  | "list-rendering"
  | "lifecycle-hooks"
  | "watch"
  | "ref"
  | "component-based"
  | "composition-api";

export type CodeSnipet = {
  html: string;
  javascript: string;
  css?: string;
};

export type FileTypes = "javascript" | "css" | "html";

export type ContextType = "browser" | "console" | "split";
