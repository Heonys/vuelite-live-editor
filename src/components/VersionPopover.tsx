import { WarningTwoIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { vueliteVersionAtom } from "@/atom/codeAtom";

const VersionPopover = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const setVersion = useSetRecoilState(vueliteVersionAtom);

  return (
    <Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton variant="ghost" icon={<WarningTwoIcon boxSize={4} />} aria-label="download" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Older Version</PopoverHeader>
        <PopoverBody>
          Some features may not work in this version. It's recommended to use the latest version.
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button colorScheme="green" onClick={() => setVersion("@latest")}>
              Use Latest Version
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default VersionPopover;
