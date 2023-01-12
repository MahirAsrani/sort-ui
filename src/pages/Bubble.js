import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Bar from '../components/Bar';

const Bubble = () => {
  const { state } = useLocation();

  const [info, setData] = useState({
    myList: state.nList || [],
    replaceWith: 0,
    replaceFrom: 1,
    maxNum: Math.max(...state.nList),
  });

  // Creating the bblSort function
  function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      setTimeout(() => {
        setData((obj) => ({ ...obj, replaceWith: i }));
      }, 2000);

      for (let j = 0; j < arr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          let temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          setTimeout(() => {
            setData((obj) => ({ ...obj, replaceWith: j, myList: arr }));
          }, 2000);
        }
      }
    }
    // Print the sorted array
    console.log(arr);
  }

  useEffect(() => {
    setTimeout(() => {
      bblSort(info.myList);
    }, 100);
  }, []);

  return (
    <Container maxW={'container.xl'}>
      <Flex direction={'column'} alignItems="center" p={'14'} pb="10">
        <Heading as={'span'} size={'lg'}>
          Peforming
        </Heading>
        <Heading as={'h1'} size={'3xl'} textAlign="center" py="2">
          Bubble Sorting
        </Heading>
      </Flex>

      <Flex
        alignItems={'flex-end'}
        justifyContent={'space-evenly'}
        p={'10'}
        pb="4"
        h={'500px'}
      >
        {info.myList.map((n, idx) => (
          <Bar
            currH={n}
            maxH={info.maxNum}
            replaceWith={info.replaceWith === idx}
            replaceFrom={info.replaceFrom === idx}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Bubble;
