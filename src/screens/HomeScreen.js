import React from 'react'
import { Box } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import Skills from './Skills'
import CardsWork from '../components/CardsWork'
import ThemeButton from '../components/ThemeButton'
import Header from '../components/Header'

const HomeScreen = () => {

  return (
    <Box h={'100vh'}>
      <Header />
      <Presentation />
      <CardsWork />
      <Skills />
      <ThemeButton />
    </Box>
  )
}

export default HomeScreen
