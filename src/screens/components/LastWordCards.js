import React from 'react';
import { Center, Wrap, Heading, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Card from '../../components/reciclable/Card';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import CardsWork from 'components/CardsWork';

const LastWordCards = () => {
  const { works } = useSelector((state) => state.work);
  return (
    <>
      <Center my={5}>
        <Heading> My last works</Heading>
      </Center>
      <Center my={5}>
        <Wrap spacing={3} maxW={['90%', '80%']}>
          <CardsWork repos={works} stop={3} />
        </Wrap>
      </Center>
      <Center mt={10}>
        <Link to='/works'>
          <Button rightIcon={<ArrowForwardIcon />} variant='outline'>
            Works Gallery
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default LastWordCards;
