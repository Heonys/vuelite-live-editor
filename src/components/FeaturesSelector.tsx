import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FEATURES_TITLES } from "../constants";
import { FeatureNames } from "@/types";
import { SelectIcon } from "@/icons";

const features = Object.entries(FEATURES_TITLES);

type Props = {
  feature: FeatureNames;
};

const FeaturesSelector = ({ feature }: Props) => {
  const textColor = useColorModeValue("#0f0a19", "#ffffff");
  const bgColor = useColorModeValue("gray.200", "gray.800");

  const navigate = useNavigate();
  const handleSelector = (name: FeatureNames) => {
    navigate(`/feature/${name}`);
  };

  return (
    <Box>
      <Menu isLazy>
        <Flex align="center" gap={2}>
          <Box color={textColor}>
            <Text fontWeight="semibold">Pick a Feature</Text>
          </Box>
          <MenuButton color="#3ca877" fontWeight="bold">
            <Flex align="center" gap={1}>
              <Text as="u">{feature}</Text>
              <SelectIcon boxSize={2.5} color="gray.500" />
            </Flex>
          </MenuButton>
        </Flex>
        <MenuList>
          {features.map(([feat, title]) => {
            return (
              <MenuItem
                key={feat}
                onClick={() => handleSelector(feat as FeatureNames)}
                color={feat === feature ? "green.400" : ""}
                bg={feat === feature ? bgColor : "transparent"}
                _hover={{ color: "green.400", bg: bgColor }}
              >
                {title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default FeaturesSelector;
