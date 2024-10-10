import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const SectionBar = () => {
  const bgColor = useColorModeValue("rgba(0, 0, 0, 0.2)", "rgba(256, 256, 256, 0.2)");

  return (
    <Flex justify="center" align="center" gap={12}>
      <Box w={24} h="1px" bg={bgColor} className="rounded-md"></Box>
      <p className="text-sm text-gray-gray.600">OR</p>
      <Box w={24} h="1px" bg={bgColor} className="rounded-md"></Box>
    </Flex>
  );
};

export default SectionBar;
