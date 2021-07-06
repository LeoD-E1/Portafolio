import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import FormContact from '../components/FormContact'
import ButtonBack from '../components/ButtonBack'
import ThemeButton from '../components/ThemeButton'

const Contact = () => {
  return (
    <Box h="100vh">
      <VStack>
        <ThemeButton />
        <ButtonBack />
      </VStack>
      <FormContact />
    </Box>
  )
}

export default Contact
