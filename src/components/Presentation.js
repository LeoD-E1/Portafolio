import React from 'react'
import { Center, Text, Box, Button, VStack, Flex } from '@chakra-ui/react'
import '../configStyles/styles.css'
import { EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


const Presentation = () => {
  return (
    <VStack h={'100%'} justifyContent="center" alignItems="center">
      <Flex m={1} direction="column">
        <Text fontSize={["4xl", "6xl"]} bgGradient="linear(to-r, blue.600, purple.500, pink.600)" p={2} bgClip="text">Hi i'm <br />Leoda,<br /> web developer</Text>
        <Text fontSize={["md", "2xl"]} p={4}>Javascript MERN Stack Dev / Python</Text>
        <Link to="/contact">
          <Center><Button leftIcon={<EmailIcon />} size="sm" colorScheme="teal" variant="outline" mb={4}>Contact Me</Button></Center>
        </Link>
      </Flex>
    </VStack>
  )
}

export default Presentation
