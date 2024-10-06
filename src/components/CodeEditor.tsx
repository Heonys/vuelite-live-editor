import { Box, HStack } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useRef, useState } from "react";
import { CODE_SNIPPETS, FileTypes } from "../constants";
import TabContainer from "./TabContainer";

const CodeEditor = () => {
  const [htmlContents, setHtmlContents] = useState(CODE_SNIPPETS.html);
  const [jsContents, setJsContents] = useState(CODE_SNIPPETS.javascript);

  const [language, setLanguage] = useState<FileTypes>("html");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const onSelect = (tab: FileTypes) => {
    setLanguage(tab);
  };

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (value?: string) => {
    switch (language) {
      case "html": {
        return setHtmlContents(value || "");
      }
      case "javascript": {
        return setJsContents(value || "");
      }
    }
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <TabContainer active={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage={language}
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={language === "html" ? htmlContents : jsContents}
            onMount={onMount}
            onChange={handleChange}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
