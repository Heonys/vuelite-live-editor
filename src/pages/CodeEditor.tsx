import { Box, HStack } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { useRef, useState } from "react";
import { CODE_SNIPPETS, FileTypes } from "../constants";
import TabContainer from "../components/TabContainer";
import useDebounce from "../hooks/useDebounce";
import LanguageSelector from "../components/LanguageSelector";

const CodeEditor = () => {
  const [htmlContents, setHtmlContents] = useState(CODE_SNIPPETS.html);
  const [jsContents, setJsContents] = useState(CODE_SNIPPETS.javascript);
  const srcDoc = `
    <html>
      <head><script src="https://unpkg.com/vue-lite-js@latest"></script></head>
      <body>${htmlContents}</body>
      <script>${jsContents}</script>
    </html>`;
  const debouncedSrcDoc = useDebounce(srcDoc, 500);

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
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Box>
        <HStack spacing={4}>
          <Box w="50%">
            <LanguageSelector feature="v-model" />
            <TabContainer active={language} onSelect={onSelect} />
            <Editor
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              value={language === "html" ? htmlContents : jsContents}
              onMount={onMount}
              onChange={handleChange}
            />
          </Box>
          <Box w="50%" h="75vh" bg="white">
            <iframe
              srcDoc={debouncedSrcDoc}
              title="output"
              sandbox="allow-scripts"
              width="100%"
              height="100%"
            ></iframe>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default CodeEditor;
