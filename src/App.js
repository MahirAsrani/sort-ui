import {
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"container.xl"}>
      <Flex direction={"column"} alignItems="center" p={"14"} pb="10">
        <Heading as={"span"} size={"lg"}>
          Welcome to
        </Heading>
        <Heading as={"h1"} size={"4xl"} textAlign="center" py="2">
          Sort UI
        </Heading>
      </Flex>

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Container>
  );
}

export default App;
