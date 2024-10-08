import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useRouteError, useNavigate } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <Box
      id="error-page"
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
      p={4}
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Oops!
      </Heading>
      <Text fontSize="lg" mb={2}>
        Sorry, an unexpected error has occurred.
      </Text>
      <Text fontSize="md" color="red.500">
        <i>{error.statusText || error.message}</i>
      </Text>
      <Button mt={4} colorScheme="teal" onClick={handleNavigateHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
