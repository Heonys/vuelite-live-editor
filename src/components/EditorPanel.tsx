import Editor, { OnMount } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { editor } from "monaco-editor";

import { FeatureNames, FileTypes } from "@/types";
import { htmlAtom, jsAtom } from "@/atom/codeAtom";
import { CODE_SNIPPETS } from "@/constants";
import { EditorTab } from "@/components/index";
import { getDecodedSouce } from "@/api/firebase";
import { delay } from "@/utils";

const EditorPanel = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const safeId = id || "v-bind";
  const { hash } = useLocation();
  const navigate = useNavigate();
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const [file, setFile] = useState<FileTypes>("html");

  const editorTheme = useColorModeValue("light", "vs-dark");
  const [htmlContents, setHtmlContents] = useRecoilState(htmlAtom);
  const [jsContents, setJsContents] = useRecoilState(jsAtom);

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (tab: FileTypes) => {
    setFile(tab);
  };

  const handleChange = (value?: string) => {
    const contentUpdater = { html: setHtmlContents, javascript: setJsContents };
    const updateContent = contentUpdater[file];
    if (updateContent) {
      updateContent(value || "");
    }
  };

  useEffect(() => {
    if (hash) {
      getDecodedSouce(hash)
        .then(delay(100))
        .then(({ html, js }) => {
          setHtmlContents(html);
          setJsContents(js);
        });
    } else if (CODE_SNIPPETS[safeId]) {
      setHtmlContents(CODE_SNIPPETS[safeId].html);
      setJsContents(CODE_SNIPPETS[safeId].javascript);
    } else {
      navigate("/", { replace: true });
    }
  }, [safeId, setHtmlContents, setJsContents, navigate, hash]);

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
