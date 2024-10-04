import { Box, HStack } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, LanguagesNames } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState<LanguagesNames>("javascript");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const onSelect = (language: LanguagesNames) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (value?: string) => {
    setValue(value || "");
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            defaultLanguage={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={value}
            onMount={onMount}
            onChange={handleChange}
          />
        </Box>
        <Output language={language} editorRef={editorRef} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
