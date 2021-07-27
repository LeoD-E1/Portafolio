import React from 'react'
import { Box, Heading, Center, Button, Image } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import LastSkills from './components/LastSkills'
import Header from '../components/Header'
import LastWordCards from './components/LastWordCards'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const HomeScreen = () => {

  return (
    <Box h={'100vh'}>
      <Header />
      <Presentation />
      <Center mb={5}><Heading> My last works</Heading></Center>
      <LastWordCards />
      <Center mt={10}>
        <Link to="/works">
          <Button rightIcon={<ArrowForwardIcon />} variant="outline">
            Works Gallery
          </Button>
        </Link>
      </Center>
      <LastSkills />
    </Box>
  )
}

export default HomeScreen
