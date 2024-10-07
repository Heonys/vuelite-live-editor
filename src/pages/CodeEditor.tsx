import { Box, HStack } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import type { FeatureNames, FileTypes } from "@/types";
import { useEffect, useRef, useState } from "react";
import { CODE_SNIPPETS, createSrcDoc } from "../constants";
import TabContainer from "../components/TabContainer";
import useDebounce from "../hooks/useDebounce";
import LanguageSelector from "../components/LanguageSelector";
import { useParams } from "react-router-dom";
import Iframe from "@/components/Iframe";

const CodeEditor = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const safeId = id || "v-bind";
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [language, setLanguage] = useState<FileTypes>("html");

  const [htmlContents, setHtmlContents] = useState(CODE_SNIPPETS[safeId].html);
  const [jsContents, setJsContents] = useState(CODE_SNIPPETS[safeId].javascript);

  const srcDoc = createSrcDoc(htmlContents, jsContents);
  const debouncedSrcDoc = useDebounce(srcDoc, 500);

  const onSelectFile = (tab: FileTypes) => {
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

  useEffect(() => {
    setHtmlContents(CODE_SNIPPETS[safeId].html);
    setJsContents(CODE_SNIPPETS[safeId].javascript);
  }, [safeId]);

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector feature={safeId} />
          <TabContainer active={language} onSelect={onSelectFile} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            value={language === "html" ? htmlContents : jsContents}
            onMount={onMount}
            onChange={handleChange}
          />
        </Box>
        <Box w="50%" h="75vh" bg="white">
          <Iframe srcDoc={debouncedSrcDoc} />
        </Box>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
