import { Flex, IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { FeaturesSelector } from "@/components/index";
import { FeatureNames } from "@/types";
import { GithubIcon, SunIcon, MoonIcon, DownloadIcon } from "@/icons";
import { useZipDownload } from "@/hooks/useZipDownload";

const NavActions = () => {
  const { id } = useParams<{ id: FeatureNames }>();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("gray.700", "gray.300");
  const { downloadProject } = useZipDownload();

  return (
    <Flex align="center" gap={0.5}>
      <motion.div className="mr-2" whileTap={{ scale: 0.9 }}>
        <Link
          to={"/signup"}
          className="px-2 py-2 rounded-md text-white text-lg cursor-pointer bg-emerald-500 hover:bg-emerald-700"
        >
          Singup test
        </Link>
      </motion.div>
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
