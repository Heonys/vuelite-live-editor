import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { EditorPanel, PreviewPanel } from "@/components/index";

const CodeEditor = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel minSize={30}>
        <EditorPanel />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={30}>
        <PreviewPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodeEditor;
