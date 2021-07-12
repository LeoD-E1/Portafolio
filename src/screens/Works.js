
import { Heading, Box, Center } from '@chakra-ui/react'
import CardsWork from '../components/CardsWork';
import ButtonBack from '../components/ButtonBack'
import ThemeButton from '../components/ThemeButton'

const Works = () => {

  return (
    <Box>
      <ButtonBack />
      <Center><Heading m={5}>My Porfolio</Heading></Center>
      <CardsWork />
      <ThemeButton />
    </Box>
  )
}

export default Works
