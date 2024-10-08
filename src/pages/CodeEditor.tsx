import { useEffect, useRef, useState } from "react";
import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import type { ContextType, FeatureNames, FileTypes } from "@/types";
import { CODE_SNIPPETS, createSrcDoc } from "../constants";
import TabGroup from "../components/TabGroup";
import useDebounce from "../hooks/useDebounce";
import { useParams } from "react-router-dom";
import Iframe from "@/components/Iframe";
import Console from "@/components/Console";

const CodeEditor = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const safeId = id || "v-bind";
  const editorTheme = useColorModeValue("light", "vs-dark");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [language, setLanguage] = useState<FileTypes>("html");
  const [context, setContext] = useState<ContextType>("browser");
  const [consoleValues, setConsoleValues] = useState<any[]>([]);

  const [htmlContents, setHtmlContents] = useState(CODE_SNIPPETS[safeId].html);
  const [jsContents, setJsContents] = useState(CODE_SNIPPETS[safeId].javascript);

  const srcDoc = createSrcDoc(htmlContents, jsContents);
  const debouncedSrcDoc = useDebounce(srcDoc, 500);

  const onClear = () => {
    setConsoleValues([]);
  };

  const onSelect = (tab: FileTypes | ContextType) => {
    if (["html", "javascript"].includes(tab)) {
      setLanguage(tab as FileTypes);
    } else {
      setContext(tab as ContextType);
    }
  };

  const onConsole = (value: any[]) => {
    setConsoleValues((prev) => [...prev, ...value]);
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
    onClear();
  }, [safeId]);

  return (
    <HStack spacing={4}>
      <Box w="50%" boxShadow="md">
        <TabGroup direction="left" active={language} onSelect={onSelect} />
        <Editor
          height="75vh"
          theme={editorTheme}
          language={language}
          value={language === "html" ? htmlContents : jsContents}
          onMount={onMount}
          onChange={handleChange}
        />
      </Box>
      <Box w="50%" boxShadow="md">
        <TabGroup direction="right" active={context} onSelect={onSelect} />
        {context === "browser" && <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />}
        {context === "console" && <Console value={consoleValues} onClear={onClear} />}
        {context === "split" && (
          <HStack h="75vh">
            <Box w="50%">
              <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />
            </Box>
            <Box w="50%">
              <Console value={consoleValues} onClear={onClear} />
            </Box>
          </HStack>
        )}
      </Box>
    </HStack>
  );
};

export default CodeEditor;
