import { EmailIcon, GoogleIcon, LockIcon, GithubIcon } from "@/icons";
import InputForm from "./InputForm";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SectionBar from "./SectionBar";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "@/utils/validation";
import { signInWithLocal, signInWithGoogle } from "@/api/firebase";
import { useNavigate } from "react-router-dom";

export type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("#ffffff", "#1e1e1e");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    signInWithLocal(value.email, value.password);
  };

  const handleClickGoogle = async () => {
    try {
      const credential = await signInWithGoogle();
      console.log(credential);
      navigate("/");
    } catch {
      navigate("/");
    }
  };

  return (
    <Flex
      as="form"
      direction="column"
      gap={5}
      className="shadow-xl rounded-xl p-8"
      bg={bgColor}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <InputForm
        register={register("email")}
        label="Email"
        placeholder="email"
        type="email"
        icon={<EmailIcon boxSize={4} />}
        autoComplete="email"
        error={errors.email?.message}
      />
      <InputForm
        register={register("password")}
        label="Password"
        placeholder="password"
        type="password"
        icon={<LockIcon boxSize={4} />}
        autoComplete="current-password"
        error={errors.password?.message}
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center py-3 w-full rounded-xl cursor-pointer bg-[#3ca877] text-white"
      >
        <p>Login</p>
      </motion.button>

      <p className="text-sm flex items-center justify-center gap-3">
        <span>{`Doesn't have an account ? `}</span>
        <span className="text-[#3ca877] cursor-pointer">Create Here</span>
      </p>

      <SectionBar />

      <motion.div
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center gap-3 w-full py-2 rounded-xl cursor-pointer bg-[#4b4c51]"
        onClick={handleClickGoogle}
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
