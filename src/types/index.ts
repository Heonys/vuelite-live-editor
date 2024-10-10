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

export type Version =
  | "@latest"
  | "v2.0.0"
  | "v1.7.2"
  | "v1.6.0"
  | "v1.5.6"
  | "v1.4.3"
  | "v1.3.0"
  | "v1.2.1"
  | "v1.0.0";
