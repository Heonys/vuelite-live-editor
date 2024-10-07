import { HStack, Text } from "@chakra-ui/react";

type Props<T> = {
  name: string;
  value: T;
  onSelect: (tab: T) => void;
  icon?: React.ReactElement;
  isActive?: boolean;
};

function TabButton<T>({ name, isActive, value, icon, onSelect }: Props<T>) {
  return (
    <button
      className={`py-2 px-4 text-gray-300 hover:text-white transition duration-300
      ${isActive ? "bg-gray-800 border-b-2 border-blue-500" : ""}`}
      onClick={() => onSelect(value)}
    >
      <HStack>
        {icon}
        <Text>{name}</Text>
      </HStack>
    </button>
  );
}

export default TabButton;
