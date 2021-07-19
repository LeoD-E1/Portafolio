import React from 'react'
import { Box, VStack } from '@chakra-ui/react'
import FormContact from '../components/FormContact'
import ButtonBack from '../components/ButtonBack'

const Contact = () => {
  return (
    <Box h="100vh">
      <FormContact />
      <ButtonBack />
    </Box>
  )
}

export default Contact
