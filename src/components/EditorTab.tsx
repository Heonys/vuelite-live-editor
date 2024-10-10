import { Box, Flex } from "@chakra-ui/react";

import { Html5Icon, JavascriptIcon } from "@/icons";
import { FileTypes } from "@/types";
import { TabButton } from "@/components/index";

type Props = {
  active: FileTypes;
  onSelect: (tab: FileTypes) => void;
};

const tabList: { type: FileTypes; name: string; icon?: React.ReactElement }[] = [
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
];

const EditorTab = ({ active, onSelect }: Props) => {
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

export default EditorTab;
