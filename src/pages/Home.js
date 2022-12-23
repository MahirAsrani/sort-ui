import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Kbd,
  Radio,
  RadioGroup,
  Stack,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

const Home = () => {
  const [value, setValue] = useState("1");

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

      <Box
        p={10}
        maxW="container.lg"
        m="auto"
        my={5}
        rounded="lg"
        boxShadow="dark-lg"
      >
        <FormControl display="flex" flexDirection="column">
          <RadioGroup onChange={setValue} value={value} mb={4}>
            <Stack direction={["column", "row"]} gap={2} alignItems="center">
              <Radio value="1">Bubble Sort</Radio>
              <Radio value="2" isDisabled>
                Quick Sort
              </Radio>
              <Radio value="3" isDisabled>
                Insertion Sort
              </Radio>
            </Stack>
          </RadioGroup>

          <FormLabel>Numbers to Sort</FormLabel>
          <Input type="number" />
          <FormHelperText>
            Press <Kbd>enter</Kbd> to add another number.
          </FormHelperText>
          <Stack spacing={2} my={3} direction="row">
            <Badge colorScheme="purple" fontSize="1xl">
              New
            </Badge>
            <Badge colorScheme="purple" fontSize="1xl">
              New
            </Badge>
            <Badge colorScheme="purple" fontSize="1xl">
              New
            </Badge>
          </Stack>

          <Button colorScheme="teal" m={"auto"} size="lg">
            Get the Numbers Sorted
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Home;
