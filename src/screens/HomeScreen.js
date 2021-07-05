import React from 'react'
import { Box } from '@chakra-ui/react'
import Presentation from '../components/Presentation'
import Skills from './Skills'

const HomeScreen = () => {
  return (
    <Box h={'100vh'}>
      <Presentation />
      <Skills />
    </Box>
  )
}

export default HomeScreen
