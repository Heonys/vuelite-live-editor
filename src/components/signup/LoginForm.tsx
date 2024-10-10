import { EmailIcon, GoogleIcon, LockIcon, GithubIcon } from "@/icons";
import InputForm from "./InputForm";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionBar from "./SectionBar";

const LoginForm = () => {
  const bgColor = useColorModeValue("#ffffff", "#1e1e1e");

  return (
    <Flex
      direction="column"
      gap={6}
      px={8}
      pt={4}
      pb={8}
      className="shadow-xl rounded-xl"
      bg={bgColor}
    >
      <InputForm label="Email" placeholder="email" icon={<EmailIcon boxSize={4} />} />
      <InputForm label="Password" placeholder="password" icon={<LockIcon boxSize={4} />} />

      <motion.div
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center py-3 w-full rounded-xl cursor-pointer bg-[#3ca877] text-white"
      >
        <p>Sign Up</p>
      </motion.div>

      <p className="text-sm flex items-center justify-center gap-3">
        <span>{`Doesn't have an account ? `}</span>
        <span className="text-[#3ca877] cursor-pointer">Create Here</span>
      </p>

      <SectionBar />

      <motion.div
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 backdrop-blur-md w-full py-2 rounded-xl cursor-pointer bg-[#4b4c51]"
      >
        <GoogleIcon className="text-2xl" />
        <p className="text-white">Sign in with Google</p>
      </motion.div>

      <SectionBar />

      <motion.div
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 backdrop-blur-md w-full py-2 rounded-xl cursor-pointer bg-[#4b4c51]"
        style={{ backgroundColor: "#4b4c51" }}
      >
        <GithubIcon className="text-2xl" color="white" />
        <p className="text-white">Sign in with Github</p>
      </motion.div>
    </Flex>
  );
};

export default LoginForm;
