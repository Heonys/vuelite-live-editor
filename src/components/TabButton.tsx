import { FileTypes } from "../constants";

type Props = {
  name: string;
  languages: FileTypes;
  onSelect: (tab: FileTypes) => void;
  isActive?: boolean;
};

const TabButton = ({ name, isActive, languages, onSelect }: Props) => {
  return (
    <button
      className={`py-2 px-4 text-gray-300 hover:text-white transition duration-300
      ${isActive ? "bg-gray-800 border-b-2 border-blue-500" : ""}`}
      onClick={() => onSelect(languages)}
    >
      {name}
    </button>
  );
};

export default TabButton;
