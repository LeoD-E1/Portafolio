import React from 'react'
import { Box } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import Skills from './Skills'
import Works from './Works'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <Box h={'100vh'}>
      <Header />
      <Presentation />
      <Works />
      <Skills />
    </Box>
  )
}

export default HomeScreen
