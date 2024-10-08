import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

type Props = {
  srcDoc: string;
  onConsole: (value: string[]) => void;
};

const Iframe = ({ srcDoc, onConsole }: Props) => {
  useEffect(() => {
    const handleMessage = (response: MessageEvent) => {
      if (response.data && response.data.source === "iframe") {
        onConsole(response.data.message);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onConsole]);

  return (
    <Box h="80vh" bg="white">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      ></iframe>
    </Box>
  );
};

export default Iframe;
