import { Box, HStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ContextType, FeatureNames } from "@/types";
import { PreviewTab, Iframe, Console } from "@/components/index";
import { htmlState, jsState } from "@/atom/codeAtom";
import { createSrcDoc } from "@/constants";
import useDebounce from "@/hooks/useDebounce";

const PreviewPanel = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const [context, setContext] = useState<ContextType>("browser");

  const htmlContents = useRecoilValue(htmlState);
  const jsContents = useRecoilValue(jsState);
  const [consoleValues, setConsoleValues] = useState<any[]>([]);

  const srcDoc = createSrcDoc(htmlContents, jsContents);
  const debouncedSrcDoc = useDebounce(srcDoc, 500);

  const onClear = () => {
    setConsoleValues([]);
  };

  const onConsole = (value: any[]) => {
    setConsoleValues((prev) => [...prev, ...value]);
  };

  const onSelect = (tab: ContextType) => {
    setContext(tab);
  };

  useEffect(() => {
    setConsoleValues([]);
  }, [id]);

  return (
    <Box boxShadow="md">
      <PreviewTab active={context} onSelect={onSelect} />
      {context === "browser" && <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />}
      {context === "console" && <Console value={consoleValues} onClear={onClear} />}
      {context === "split" && (
        <HStack h="80vh" spacing={0}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <Iframe srcDoc={debouncedSrcDoc} onConsole={onConsole} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Console value={consoleValues} onClear={onClear} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </HStack>
      )}
    </Box>
  );
};

export default PreviewPanel;
