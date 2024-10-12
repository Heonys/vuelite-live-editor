import { Outlet } from "react-router-dom";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Navbar } from "@/components/index";

function App() {
  const bgColor = useColorModeValue("#ffffff", "#131418");
  return (
    <Flex direction="column" minH="100vh" bg={bgColor} color="gray.500" px={3}>
      <Navbar />
      <Outlet />
    </Flex>
  );
}

export default App;
