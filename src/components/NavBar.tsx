import { Box, Flex, Text, Image, useColorModeValue, Tag } from "@chakra-ui/react";
import LogoImage from "@/assets/logo.png";
import { useVersion } from "@/hooks/useVersion,";

import NavActions from "./NavActions";

const Navbar = () => {
  const { value } = useVersion("vue-lite-js");
  const bgColor = useColorModeValue("#ffffff", "#0f0a19");
  const textColor = useColorModeValue("#0f0a19", "#ffffff");

  return (
    <Box bg={bgColor} p={4} mb={3} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="1rem">
          <Image
            objectFit="cover"
            borderRadius="full"
            boxSize="30px"
            src={LogoImage}
            alt="logo imgage"
          />
          <Text fontSize="xl" fontStyle="revert" fontWeight="bold" color={textColor}>
            <Text as="span" color="#3ca877">
              Vue
            </Text>
            <Text as="span" color="#3ca877" fontStyle="italic">
              lite
            </Text>
            {` Playground`}
          </Text>
          <Tag variant="solid" bg="#3ca877">{`V${value}`}</Tag>
        </Flex>
        <NavActions />
      </Flex>
    </Box>
  );
};

export default Navbar;
