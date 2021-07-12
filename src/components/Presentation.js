import React from 'react'
import { Center, Text, Button, VStack, Flex } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import ButtonsSocial from './ButtonsSocial'

const Presentation = () => {
  return (
    <VStack h={'93vh'} justifyContent="center" alignItems="center">
      <Flex m={1} direction="column">
        <Text fontSize={["4xl", "6xl"]} bgGradient="linear(to-r, blue.600, pink.500, red.600)" p={2} bgClip="text">Hi i'm <br />Leoda,<br /> web developer</Text>
        <Text fontSize={["md", "2xl"]} p={4}>Javascript MERN Stack / Python Dev </Text>
        <Center>
          <VStack>
            <Link to="/contact">
              <Button leftIcon={<EmailIcon />} size="md" variant="outline" mb={4}>Contact Me</Button>
            </Link>
            <ButtonsSocial />
          </VStack>
        </Center>
      </Flex>

    </VStack>
  )
}

export default Presentation
