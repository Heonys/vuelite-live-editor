import { Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import FeaturesSelector from "./FeaturesSelector";
import { FeatureNames } from "@/types";
import { useParams } from "react-router-dom";
import { GithubIcon, SunIcon, MoonIcon, DownloadIcon, LinkIcon } from "@/icons";

const NavActions = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Flex align="center" gap={2}>
      <FeaturesSelector feature={id || "v-bind"} />
      <IconButton
        variant="ghost"
        aria-label="Toggle dark mode"
        color={buttonColor}
        icon={colorMode === "light" ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
        onClick={toggleColorMode}
        transition="transform 0.2s ease"
        _hover={{ transform: "scale(1.2)" }}
      />
      <IconButton
        variant="ghost"
        color={buttonColor}
        icon={<DownloadIcon boxSize={5} />}
        aria-label="download"
        transition="transform 0.2s ease"
        _hover={{ transform: "scale(1.2)" }}
      />
      <IconButton
        variant="ghost"
        color={buttonColor}
        icon={<LinkIcon boxSize={5} />}
        aria-label="link"
        transition="transform 0.2s ease"
        _hover={{ transform: "scale(1.2)" }}
      />
      <IconButton
        as="a"
        href="https://github.com/Heonys/vue-lite-js"
        target="_blank"
        variant="ghost"
        color={buttonColor}
        icon={<GithubIcon size={22} />}
        aria-label="github"
        transition="transform 0.2s ease"
        _hover={{ transform: "scale(1.2)" }}
      />
    </Flex>
  );
};

export default NavActions;
