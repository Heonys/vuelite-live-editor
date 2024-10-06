import { Box, VStack } from "@chakra-ui/react";

const EditorPage = () => {
  return (
    <Box h="90vh">
      <VStack spacing={4} h="100%" align="stretch">
        <Box h="50%" bg="red.200"></Box>
        <Box h="50%" bg="green.200">
          <iframe
            //
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </Box>
      </VStack>
    </Box>
  );
};

export default EditorPage;
