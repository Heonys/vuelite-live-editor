import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { EyeIcon, EyeOff } from "lucide-react";
import { ComponentPropsWithoutRef, ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { UseFormRegisterReturn } from "react-hook-form";

import { Inputs } from "./LoginForm";

type Props = {
  label: string;
  register: UseFormRegisterReturn<keyof Inputs>;
  icon: ReactElement;
  type: ComponentPropsWithoutRef<"input">["type"];
  error?: string;
} & ComponentPropsWithoutRef<"input">;

const InputForm = ({ register, label, icon, type, error, ...rest }: Props) => {
  const textColor = useColorModeValue("blackAlpha.700", "#dae6f7");
  const [show, setShow] = useState(false);

  return (
    <Flex direction="column" justify="start" align="start" gap={1}>
      <Flex gap={3} className="text-sm font-medium" color={textColor}>
        <Box>{label}</Box>
        <span className="text-red-500">{error}</span>
      </Flex>
      <Flex
        justify="center"
        align="center"
        gap={3}
        className="w-full md:w-96 rounded-md px-4 py-1 bg-gray-200"
      >
        {icon}
        <input
          type={show ? "text" : type}
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-lg"
          {...register}
          {...rest}
        />
        {type === "password" && (
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
