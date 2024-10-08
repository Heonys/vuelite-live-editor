import { useEffect, useRef, useState } from "react";
import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import Editor, { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import type { ContextType, FeatureNames, FileTypes } from "@/types";
import { CODE_SNIPPETS, createSrcDoc } from "../constants";
import TabGroup from "../components/TabGroup";
import useDebounce from "../hooks/useDebounce";
import { useNavigate, useParams } from "react-router-dom";
import Iframe from "@/components/Iframe";
import Console from "@/components/Console";
import { useRecoilState } from "recoil";
import { htmlState, jsState } from "@/atom/codeAtom";

const CodeEditor = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const safeId = id || "v-bind";
  const navigate = useNavigate();

  const editorTheme = useColorModeValue("light", "vs-dark");
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [language, setLanguage] = useState<FileTypes>("html");
  const [context, setContext] = useState<ContextType>("browser");
  const [consoleValues, setConsoleValues] = useState<any[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [htmlContents, setHtmlContents] = useRecoilState(htmlState);
  const [jsContents, setJsContents] = useRecoilState(jsState);

  const srcDoc = createSrcDoc(htmlContents, jsContents);
  const debouncedSrcDoc = useDebounce(srcDoc, 500);

  const onClear = () => {
    setConsoleValues([]);
  };

  const onToggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
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
    if (CODE_SNIPPETS[safeId]) {
      setHtmlContents(CODE_SNIPPETS[safeId].html);
      setJsContents(CODE_SNIPPETS[safeId].javascript);
    } else {
      navigate("/", { replace: true });
    }
    onClear();
  }, [safeId, setHtmlContents, setJsContents, navigate]);

  return (
    <HStack spacing={2}>
      <Box w={isCollapsed ? "100%" : "50%"} boxShadow="md">
        <TabGroup
          direction="left"
          active={language}
          onSelect={onSelect}
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
        />
        <Editor
          height="80vh"
          theme={editorTheme}
          language={language}
          value={language === "html" ? htmlContents : jsContents}
          onMount={onMount}
          onChange={handleChange}
        />
      </Box>
      {!isCollapsed && (
        <Box w="50%" boxShadow="md">
          <TabGroup direction="right" active={context} onSelect={onSelect} />
          {context === "browser" && <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />}
          {context === "console" && <Console value={consoleValues} onClear={onClear} />}
          {context === "split" && (
            <HStack h="80vh" spacing={0}>
              <Box w="50%">
                <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />
              </Box>
              <Box w="50%">
                <Console value={consoleValues} onClear={onClear} />
              </Box>
            </HStack>
          )}
        </Box>
      )}
    </HStack>
  );
};

export default CodeEditor;
