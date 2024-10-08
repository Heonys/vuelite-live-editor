import { ContextType, FileTypes } from "@/types";
import TabButton from "./TabButton";
import { BrowserIcon, ConsoleIcon, Html5Icon, JavascriptIcon, SplitIcon } from "@/icons";
import { Flex } from "@chakra-ui/react";

type Props = {
  direction: "left" | "right";
  active: FileTypes | ContextType;
  onSelect: (tab: FileTypes | ContextType) => void;
};

type TabList = {
  left: { type: FileTypes; name: string; icon?: React.ReactElement }[];
  right: { type: ContextType; name: string; icon?: React.ReactElement }[];
};

const tabList: TabList = {
  left: [
    {
      type: "html",
      name: "index.html",
      icon: <Html5Icon color="#E34F26" size={17} />,
    },
    {
      type: "javascript",
      name: "app.js",
      icon: <JavascriptIcon color="#F7DF1E" size={17} />,
    },
  ],
  right: [
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
  ],
};

const TabGroup = ({ direction, active, onSelect }: Props) => {
  return (
    <Flex>
      {tabList[direction].map(({ name, type, icon }) => {
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
    </Flex>
  );
};

export default TabGroup;
