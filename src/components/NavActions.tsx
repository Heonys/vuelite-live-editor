import {
  Flex,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { useZipDownload } from "@/hooks/useZipDownload";
import { encodedUriSelector } from "@/atom/codeAtom";
import { createSource } from "@/api/firebase";
import { writeClipboardText } from "@/utils";
import { GithubIcon, SunIcon, MoonIcon, DownloadIcon, ShareIcon } from "@/icons";

const NavActions = () => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("gray.700", "gray.300");
  const { downloadProject } = useZipDownload();
  const [encodedHTML, encodedJS] = useRecoilValue(encodedUriSelector);

  const handleShare = async () => {
    const id = await createSource(encodedHTML, encodedJS);
    writeClipboardText(id);

    toast({
      title: "URL copied to clipboard!",
      position: "top",
      status: "info",
      duration: 2000,
    });
  };

  return (
    <Flex align="center" gap={0.5}>
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
      <Tooltip label="Copy sharable URL">
        <IconButton
          variant="ghost"
          color={buttonColor}
          icon={<ShareIcon size={24} />}
          aria-label="download"
          transition="transform 0.2s ease"
          _hover={{ transform: "scale(1.2)" }}
          onClick={handleShare}
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
