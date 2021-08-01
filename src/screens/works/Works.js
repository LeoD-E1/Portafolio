import { Heading, Box, Center } from "@chakra-ui/react";
import CardsWork from "../../components/CardsWork";
import ButtonBack from "../../components/buttons/ButtonBack";

const Works = () => {
  return (
    <Box>
      <ButtonBack />
      <Center>
        <Heading m={5}>My Porfolio</Heading>
      </Center>
      <CardsWork />
    </Box>
  );
};

export default Works;
