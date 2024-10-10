import { LoginForm } from "@/components/signup";
import { Flex } from "@chakra-ui/react";

const SignUpPage = () => {
  return (
    <Flex justify="center" align="center" w="full" className="flex-1">
      <LoginForm />
    </Flex>
  );
};

export default SignUpPage;
