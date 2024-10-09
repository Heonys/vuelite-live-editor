import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import PreviewPanel from "@/components/PreviewPanel";
import EditorPanel from "@/components/EditorPanel";

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
