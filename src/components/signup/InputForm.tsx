import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { EyeIcon, EyeOff } from "lucide-react";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  label: string;
  placeholder: string;
  icon: ReactElement;
  isPassword?: boolean;
};

const InputForm = ({ label, icon, placeholder, isPassword }: Props) => {
  const textColor = useColorModeValue("blackAlpha.700", "#D1D5DB");
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <Flex direction="column" justify="start" align="start" gap={1}>
      <Box className="text-sm font-medium" color={textColor}>
        {label}
      </Box>
      <Flex
        justify="center"
        align="center"
        gap={3}
        className="w-full md:w-96 rounded-md px-4 py-1 bg-gray-200"
      >
        {icon}
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-lg"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {isPassword && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <EyeOff color="#555" size={20} /> : <EyeIcon color="#555" size={20} />}
          </motion.div>
        )}
      </Flex>
    </Flex>
  );
};

export default InputForm;
