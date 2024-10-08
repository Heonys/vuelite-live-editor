import { Outlet } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/NavBar";

function App() {
  const bgColor = useColorModeValue("#ffffff", "#0f0a19");

  return (
    <Box minH="100vh" bg={bgColor} color="gray.500" px={3}>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default App;
