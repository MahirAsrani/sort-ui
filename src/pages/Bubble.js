import { ArrowBackIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  SliderProvider,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';

const Bubble = () => {
  const { state } = useLocation();

  const [info, setData] = useState({
    myList: state.nList || [],
    replaceWith: null,
    replaceFrom: null,
    maxNum: Math.max(...state.nList),
    completed: false,
    sorted: [],
  });

  function replay() {
    setData({
      myList: state.nList || [],
      replaceWith: null,
      replaceFrom: null,
      maxNum: Math.max(...state.nList),
      completed: false,
      sorted: [],
    });

    bblSort(info.myList);
  }

  // Creating the bblSort function
  async function bblSort(list) {
    let arr = [...list];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        await waitTill(1000);
        setData((obj) => ({ ...obj, replaceFrom: j, replaceWith: j + 1 }));
        await waitTill(1000);

        if (arr[j] > arr[j + 1]) {
          setData((obj) => ({ ...obj, swap: true }));
          await waitTill(1000);

          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;

          setData((obj) => ({ ...obj, myList: arr }));
          await waitTill(1000);
          setData((obj) => ({ ...obj, swap: false }));
        }
      }

      setData((obj) => ({ ...obj, sorted: [...obj.sorted, len - 1 - i] }));
    }

    // Finished sorting
    setData((obj) => ({
      ...obj,
      completed: true,
      replaceWith: null,
      replaceFrom: null,
    }));
  }

  const waitTill = (time) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, time);
    });

  useEffect(() => {
    bblSort(info.myList);
  }, []);

  const navigate = useNavigate();

  return (
    <Container
      maxW={'container.xl'}
      minH={'100vh'}
      display={'flex'}
      flexDirection="column"
    >
      {info.completed && (
        <Button
          rightIcon={<RepeatIcon />}
          colorScheme="blue"
          variant="outline"
          my={2}
          onClick={() => replay()}
          position="absolute"
          top={'20px'}
          right={'50px'}
        >
          Replay
        </Button>
      )}
      <Icon
        boxSize={6}
        as={ArrowBackIcon}
        position="absolute"
        top={'20px'}
        left={'50px'}
        cursor="pointer"
        onClick={() => navigate('/')}
      />

      <Flex direction={'column'} alignItems="center" p={'14'} pb="10">
        <Heading as={'span'} size={'lg'}>
          Peforming
        </Heading>
        <Heading as={'h1'} size={'3xl'} textAlign="center" py="2">
          Bubble Sorting
        </Heading>
      </Flex>
      <Flex alignItems="center" flex="1">
        <Flex
          alignItems={'flex-end'}
          justifyContent={'space-evenly'}
          h="50vh"
          w="100%"
        >
          {info.myList.map((n, idx) => (
            <Bar
              key={idx}
              currH={n}
              maxH={info.maxNum}
              replaceWith={info.replaceWith === idx}
              replaceFrom={info.replaceFrom === idx}
              swap={info.swap}
              sorted={info.sorted.includes(idx)}
            />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Bubble;
