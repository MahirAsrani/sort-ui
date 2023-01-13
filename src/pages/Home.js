import React, { useEffect, useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
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
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const [type, setValueType] = useState('bubble');
  const [input, setInput] = useState('');
  const [numList, setNumList] = useState([]);
  const [error, setError] = useState({
    show: false,
  });

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    setNumList(state.nList);
  }, [state]);

  const rmNumberList = (i) => setNumList(numList.filter((n, idx) => idx !== i));
  const addToList = (e) => {
    e.preventDefault();
    setError({
      show: false,
    });
    if (input === '') return;
    if (isNaN(Number(input))) return;
    setNumList((vals) => [...vals, Number(input)]);
    setInput('');
  };
  const goToSortUI = () => {
    if (numList.length === 0) {
      return setError({
        show: true,
        message: 'Enter some numbers in this field',
      });
    }
    if (numList.length <= 2) {
      return setError({
        show: true,
        message: 'There should be atleast 3 numbers',
      });
    }

    switch (type) {
      case 'bubble':
        navigate('/bubble-sort', { state: { nList: numList } });
        break;

      default:
        break;
    }
  };

  return (
    <Container maxW={'container.xl'}>
      <Flex direction={'column'} alignItems="center" p={'14'} pb="10">
        <Heading as={'span'} size={'lg'}>
          Welcome to
        </Heading>
        <Heading as={'h1'} size={'4xl'} textAlign="center" py="2">
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
        <form onSubmit={addToList} autoComplete="off">
          <FormControl display="flex" flexDirection="column">
            <RadioGroup onChange={setValueType} value={type} mb={4}>
              <Stack direction={['column', 'row']} gap={2} alignItems="center">
                <Radio value="bubble">Bubble Sort</Radio>
                <Radio value="2" isDisabled>
                  Quick Sort
                </Radio>
                <Radio value="3" isDisabled>
                  Insertion Sort
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl
            display="flex"
            flexDirection="column"
            isInvalid={error.show}
          >
            <FormLabel>Numbers to Sort</FormLabel>
            <Input
              type="number"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              isInvalid={error.show}
              errorBorderColor="crimson"
            />
            {error.show && (
              <FormErrorMessage>{error.message}.</FormErrorMessage>
            )}
            <FormHelperText>
              Press <Kbd>enter</Kbd> to add another number.
            </FormHelperText>
            <Stack spacing={2} my={3} direction="row">
              {numList.map((n, i) => (
                <Badge
                  key={i}
                  colorScheme="purple"
                  fontSize="1xl"
                  onClick={() => rmNumberList(i)}
                >
                  {n}
                </Badge>
              ))}
            </Stack>

            <Button
              colorScheme="teal"
              m={'auto'}
              size="lg"
              onClick={goToSortUI}
            >
              Get the Numbers Sorted
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
};

export default Home;
