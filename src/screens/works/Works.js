import { Heading, Box, Center } from '@chakra-ui/react';
import CardsWork from '../../components/CardsWork';
import { useSelector } from 'react-redux';

const Works = () => {
  const { works } = useSelector((state) => state.work);

  return (
    <Box>
      <Center>
        <Heading m={5}>My Porfolio</Heading>
      </Center>
      <CardsWork repos={works} stop={9} />
    </Box>
  );
};

export default Works;
