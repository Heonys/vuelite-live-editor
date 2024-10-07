import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FEATURE_NAMES, FEATURES } from "../constants";

const languages = Object.entries(FEATURES);

type Props = {
  feature: FEATURE_NAMES;
  // onSelect: (lang: LanguagesNames) => void;
};

const LanguageSelector = ({ feature }: Props) => {
  return (
    <Box ml={2} mb={4}>
      <Menu isLazy>
        <MenuButton as={Button}>{feature}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang]) => {
            return (
              <MenuItem
                key={lang}
                // onClick={() => onSelect(lang as LanguagesNames)}
                color={lang === feature ? "blue.400" : ""}
                bg={lang === feature ? "gray.700" : "transparent"}
                _hover={{ color: "blue.400", bg: "gray.900" }}
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ("1.2.3")
                </Text>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
