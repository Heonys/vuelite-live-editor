import Editor, { OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import type { editor } from "monaco-editor";

import { FeatureNames, FileTypes } from "@/types";
import { htmlState, jsState } from "@/atom/codeAtom";
import { CODE_SNIPPETS } from "@/constants";
import { EditorTab } from "@/components/index";

const EditorPanel = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const safeId = id || "v-bind";
  const navigate = useNavigate();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [file, setFile] = useState<FileTypes>("html");

  const editorTheme = useColorModeValue("light", "vs-dark");
  const [htmlContents, setHtmlContents] = useRecoilState(htmlState);
  const [jsContents, setJsContents] = useRecoilState(jsState);

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (tab: FileTypes) => {
    setFile(tab);
  };

  const handleChange = (value?: string) => {
    switch (file) {
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
  }, [safeId, setHtmlContents, setJsContents, navigate]);

  return (
    <Box boxShadow="md">
      <EditorTab active={file} onSelect={onSelect} />
      <Editor
        height="80vh"
        theme={editorTheme}
        language={file}
        value={file === "html" ? htmlContents : jsContents}
        onMount={onMount}
        onChange={handleChange}
      />
    </Box>
  );
};

export default EditorPanel;
