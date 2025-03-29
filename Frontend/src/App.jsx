import { Button, Box } from "@chakra-ui/react";

function App() {
  console.log("✅ App component rendered");
  return (
    <Box p={6} bg="gray.100" minH="100vh">
      <Button colorScheme="teal" size="lg">
        Hello from Chakra ✨
      </Button>
    </Box>
  );
}

export default App;
