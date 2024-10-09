import { BrowserIcon, ConsoleIcon, SplitIcon } from "@/icons";
import { ContextType } from "@/types";
import { Box, Flex } from "@chakra-ui/react";
import TabButton from "./TabButton";

type Props = {
  active: ContextType;
  onSelect: (tab: ContextType) => void;
};

const tabList: { type: ContextType; name: string; icon?: React.ReactElement }[] = [
  {
    type: "browser",
    name: "Browser",
    icon: <BrowserIcon size={20} />,
  },
  {
    type: "console",
    name: "Console",
    icon: <ConsoleIcon size={20} />,
  },
  {
    type: "split",
    name: "Split",
    icon: <SplitIcon size={20} />,
  },
];

const PreviewTab = ({ onSelect, active }: Props) => {
  return (
    <Flex align="center" justify="space-between">
      <Box>
        {tabList.map(({ name, type, icon }) => {
          return (
            <TabButton
              key={name}
              name={name}
              icon={icon}
              isActive={type === active}
              value={type}
              onSelect={onSelect}
            />
          );
        })}
      </Box>
    </Flex>
  );
};

export default PreviewTab;
