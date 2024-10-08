import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

type Props<T> = {
  name: string;
  value: T;
  onSelect: (tab: T) => void;
  icon?: React.ReactElement;
  isActive?: boolean;
};

function TabButton<T>({ name, isActive, value, icon, onSelect }: Props<T>) {
  const activeBgColor = useColorModeValue("bg-gray-200", "bg-gray-800");
  const textColor = useColorModeValue("#000000", "text-gray-300");

  return (
    <button
      className={`py-2 px-4 ${textColor} transition duration-300
      ${isActive ? `${activeBgColor} border-b-[3.5px] border-blue-500` : ""}`}
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
