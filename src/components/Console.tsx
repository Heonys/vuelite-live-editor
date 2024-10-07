import { RemoveIcon } from "@/icons";
import { isPrimitive } from "@/utils";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";

type Props = {
  value: any[];
  onClear: () => void;
};

const Console = ({ value, onClear }: Props) => {
  return (
    <Box h="75vh" bg="#1e1e1e" overflowY="auto" position="relative">
      <Box>
        <IconButton
          aria-label="Clear console"
          icon={<RemoveIcon size={20} />}
          position="absolute"
          top={2}
          right={2}
          size="sm"
          colorScheme="gray"
          variant="solid"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={onClear}
        />
      </Box>

      <Box className="font-mono text-sm p-4">
        {value.map((log, index) => (
          <Flex key={index} className="whitespace-pre-wrap mb-1" align="flex-start">
            <Text as="span" fontWeight="bold" color="gray.400" mr={2}>
              [{index}]
            </Text>
            <Text as="span" color="#ffffff" wordBreak="break-all" overflowWrap="break-word">
              {isPrimitive(log) ? log : JSON.stringify(log)}
            </Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Console;
