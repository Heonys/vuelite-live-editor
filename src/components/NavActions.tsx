import { Flex, IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import FeaturesSelector from "./FeaturesSelector";
import { FeatureNames } from "@/types";
import { useParams } from "react-router-dom";
import { GithubIcon, SunIcon, MoonIcon, DownloadIcon, LinkIcon } from "@/icons";
import { useZipDownload } from "@/hooks/useZipDownload";

const NavActions = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("gray.700", "gray.300");
  const { downloadProject } = useZipDownload();

  const handleShareadLink = () => {
    // const url = `${window.location.origin}${location.pathname}?html=${encodedHtml}&js=${encodedJs}`;
    // console.log(url);
    // navigate(`${location.pathname}?html=${encodedHtml}&js=${encodedJs}`);
  };

  return (
    <Flex align="center" gap={1}>
      <FeaturesSelector feature={id || "v-bind"} />
      <Tooltip label="Toggle dark mode">
        <IconButton
          variant="ghost"
          aria-label="Toggle dark mode"
          color={buttonColor}
          icon={colorMode === "light" ? <MoonIcon boxSize={5} /> : <SunIcon boxSize={5} />}
          onClick={toggleColorMode}
          transition="transform 0.2s ease"
          _hover={{ transform: "scale(1.2)" }}
        />
      </Tooltip>
      <Tooltip label="Download project file">
        <IconButton
          variant="ghost"
          color={buttonColor}
          icon={<DownloadIcon boxSize={5} />}
          aria-label="download"
          transition="transform 0.2s ease"
          _hover={{ transform: "scale(1.2)" }}
          onClick={downloadProject}
        />
      </Tooltip>
      <Tooltip label="Copy sharable URL">
        <IconButton
          variant="ghost"
          color={buttonColor}
          icon={<LinkIcon boxSize={5} />}
          aria-label="link"
          transition="transform 0.2s ease"
          _hover={{ transform: "scale(1.2)" }}
          onClick={handleShareadLink}
        />
      </Tooltip>
      <Tooltip label="View on Github">
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
      </Tooltip>
    </Flex>
  );
};

export default NavActions;
