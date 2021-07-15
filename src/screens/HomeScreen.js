import React from 'react'
import { Box, Heading, Center, Button } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import Skills from './Skills'
import ThemeButton from '../components/ThemeButton'
import Header from '../components/Header'
import LastWordCards from './components/LastWordCards'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const HomeScreen = () => {

  return (
    <Box h={'100vh'}>
      <Header />
      <Presentation />
      <Center mb={5}><Heading> my last works</Heading></Center>
      <LastWordCards />
      <Center mt={10}>
        <Link to="/works">
          <Button rightIcon={<ArrowForwardIcon />} variant="outline">
            Works Gallery
          </Button>
        </Link>
      </Center>
      <Skills />
      <ThemeButton />
    </Box>
  )
}

export default HomeScreen
