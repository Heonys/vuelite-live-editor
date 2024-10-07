import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FEATURES_TITLES } from "../constants";
import { FeatureNames } from "@/types";
import { useNavigate } from "react-router-dom";
import { ArrowDownIcon } from "@/icons";

const features = Object.entries(FEATURES_TITLES);

type Props = {
  feature: FeatureNames;
};

const FeaturesSelector = ({ feature }: Props) => {
  const navigate = useNavigate();
  const handleSelector = (name: FeatureNames) => {
    navigate(`/feature/${name}`);
  };

  return (
    <Box ml={2} mb={4}>
      <Menu isLazy>
        <MenuButton as={Button} rightIcon={<ArrowDownIcon />}>
          {feature}
        </MenuButton>
        <MenuList bg="#110c1b">
          {features.map(([feat, title]) => {
            return (
              <MenuItem
                key={feat}
                onClick={() => handleSelector(feat as FeatureNames)}
                color={feat === feature ? "blue.400" : ""}
                bg={feat === feature ? "gray.700" : "transparent"}
                _hover={{ color: "blue.400", bg: "gray.900" }}
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
