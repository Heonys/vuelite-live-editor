import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS, LanguagesNames } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

type Props = {
  language: LanguagesNames;
  onSelect: (lang: LanguagesNames) => void;
};

const LanguageSelector = ({ language, onSelect }: Props) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language: {language}
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="#110c1b">
          {languages.map(([lang, version]) => {
            return (
              <MenuItem
                key={lang}
                onClick={() => onSelect(lang as LanguagesNames)}
                color={lang === language ? "blue.400" : ""}
                bg={lang === language ? "gray.700" : "transparent"}
                _hover={{ color: "blue.400", bg: "gray.900" }}
              >
                {lang}
                &nbsp;
                <Text as="span" color="gray.600" fontSize="sm">
                  ({version})
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
