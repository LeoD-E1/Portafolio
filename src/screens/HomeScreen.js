import React from 'react'
import { Box } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import Skills from './Skills'
import Works from './Works'
import ThemeButton from '../components/ThemeButton'

const HomeScreen = () => {
  return (
    <Box h={'100vh'}>
      <Presentation />
      <Works />
      <Skills />
      <ThemeButton />
    </Box>
  )
}

export default HomeScreen
