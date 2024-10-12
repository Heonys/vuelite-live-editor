import { Flex, IconButton, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GithubIcon, SunIcon, MoonIcon, DownloadIcon, ShareIcon } from "@/icons";
import { useZipDownload } from "@/hooks/useZipDownload";

const NavActions = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonColor = useColorModeValue("gray.700", "gray.300");
  const { downloadProject } = useZipDownload();
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
          disabled
          variant="ghost"
          color={buttonColor}
          icon={<ShareIcon size={24} />}
          aria-label="download"
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
      {/* <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon boxSize={6} />}
          variant="ghost"
          color={buttonColor}
        />
        <MenuList>
          {user ? (
            <MenuItem icon={<LogoutIcon size={22} />} onClick={logout}>
              Logout
            </MenuItem>
          ) : (
            <MenuItem icon={<LoginIcon size={22} />} onClick={() => navigate("/signup")}>
              Login
            </MenuItem>
          )}

          <MenuDivider />
          <MenuItem icon={<SaveIcon size={22} />}>Save Code</MenuItem>
          <MenuItem icon={<LoadIcon size={22} />}>Load Previous Code</MenuItem>
        </MenuList>
      </Menu> */}
    </Flex>
  );
};

export default NavActions;
