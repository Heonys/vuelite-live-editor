import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { VUELITE_VERSION } from "../constants";
import { SelectIcon } from "@/icons";
import { vueliteVersion } from "@/atom/codeAtom";
import { useRecoilState } from "recoil";
import { Version } from "@/types";
import VersionPopover from "./VersionPopover";

const features = Object.entries(VUELITE_VERSION);

const VersionSelector = () => {
  const textColor = useColorModeValue("#0f0a19", "#ffffff");
  const bgColor = useColorModeValue("gray.200", "gray.800");
  const [version, setVersion] = useRecoilState(vueliteVersion);

  return (
    <Flex gap={0}>
      <Menu isLazy>
        <Flex align="center" gap={2} mr={1}>
          <Box color={textColor}>
            <Text fontWeight="semibold">Vuelite Version</Text>
          </Box>
          <MenuButton color="#3ca877" fontWeight="bold">
            <Flex align="center" gap={1}>
              <Text as="u">{version}</Text>
              <SelectIcon boxSize={2.5} color="gray.500" />
            </Flex>
          </MenuButton>
        </Flex>
        <MenuList>
          <MenuOptionGroup defaultValue={"@latest"} value={version} type="radio">
            {features.map(([key, value]) => {
              return (
                <MenuItemOption
                  key={key}
                  value={value}
                  onClick={() => setVersion(value as Version)}
                  color={value === version ? "green.400" : ""}
                  bg={value === version ? bgColor : "transparent"}
                  _hover={{ color: "green.400", bg: bgColor }}
                >
                  {key}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      {version !== "@latest" && <VersionPopover />}
    </Flex>
  );
};

export default VersionSelector;
