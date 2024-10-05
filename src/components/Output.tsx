import { Box, Button, Text, useToast } from "@chakra-ui/react";
import type { editor } from "monaco-editor";
import { excuteCode } from "../api/piston";
import { LanguagesNames } from "../constants";
import { useState } from "react";

type Props = {
  language: LanguagesNames;
  editorRef: React.MutableRefObject<editor.IStandaloneCodeEditor | undefined>;
};

const Output = ({ language, editorRef }: Props) => {
  const toast = useToast();
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const souceCode = editorRef.current?.getValue();
    if (!souceCode) return;

    try {
      setIsLoading(true);
      const { run } = await excuteCode(language, souceCode);
      setOutput(run.output.split("\n"));
      if (run.stderr) setIsError(true);
      else setIsError(false);
    } catch (error) {
      let errorMessage = "Unable to run code";
      if (error instanceof Error) errorMessage = error.message;
      toast({
        title: "An error occurred.",
        description: errorMessage,
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button colorScheme="green" variant="outline" mb={4} onClick={runCode} isLoading={isLoading}>
        Run Code
      </Button>
      <Box
        h="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        color={isError ? "red.500" : ""}
      >
        {output
          ? output.map((line, index) => <Text key={index}>{line}</Text>)
          : "Click 'Run Code' to see the output here"}
      </Box>
    </Box>
  );
};

export default Output;
