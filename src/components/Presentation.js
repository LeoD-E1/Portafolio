import React from 'react';
import {
  Text,
  Button,
  VStack,
  Flex,
  useBreakpointValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ButtonsSocial from './buttons/ButtonsSocial';
import { useSelector } from 'react-redux';

const Presentation = () => {
  const user = useSelector((state) => state.user);

  return (
    <Flex
      w={'full'}
      h='60vh'
      backgroundImage={`url(${user.background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        h={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={
          'linear(to-r, blackAlpha.800,  blackAlpha.500,  blackAlpha.200)'
        }
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={8}>
          <Stack spacing={0}>
            <Text
              color={'white'}
              fontWeight={300}
              fontSize={useBreakpointValue({ base: 'md', md: 'xl' })}
            >
              Hi, my name is
            </Text>
            <Heading
              color={'white'}
              fontWeight={700}
              fontSize={useBreakpointValue({
                base: '4xl',
                md: '5xl',
                lg: '6xl',
              })}
            >
              {user.name} {user.surname}
            </Heading>
            <Text
              color={'white'}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
              fontWeight={700}
            >
              {user.target}
            </Text>
          </Stack>
          <Stack direction={'row'}>
            <Link to='/contact'>
              <Button
                leftIcon={<EmailIcon />}
                bg='transparent'
                css={{
                  border: '1px solid white',
                  transition: 'all 300ms ease',
                  color: 'white',
                }}
                _hover={{ bg: '#3DADFF', border: '1px solid #3DADFF' }}
              >
                Get in touch
              </Button>
            </Link>
          </Stack>
        </Stack>
        <ButtonsSocial />
      </VStack>
    </Flex>
  );
};

export default Presentation;
