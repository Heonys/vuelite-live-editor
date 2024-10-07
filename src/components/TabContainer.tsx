import { FileTypes } from "@/types";
import TabButton from "./TabButton";

type Props = {
  active: string;
  onSelect: (tab: FileTypes) => void;
};

const tabList: { languages: FileTypes; name: string }[] = [
  {
    languages: "html",
    name: "index.html",
  },
  {
    languages: "javascript",
    name: "app.js",
  },
];

const TabContainer = ({ active, onSelect }: Props) => {
  return (
    <div className="flex border-b border-gray-700 shadow-2xl">
      {tabList.map(({ name, languages }) => {
        return (
          <TabButton
            key={name}
            name={name}
            isActive={languages === active}
            languages={languages}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

export default TabContainer;
