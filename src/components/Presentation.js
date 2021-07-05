import React from 'react'
import { Center, Text, Box, Button } from '@chakra-ui/react'
import '../configStyles/styles.css'
import { EmailIcon } from '@chakra-ui/icons'


const Presentation = () => {
  return (
    <Box pt="20" h={'100vh'}>
      <Box p={4} fontSize={["4xl", "6xl"]} rounded={true} w='100%' direction={["column", "column", "row", "row"]} >
        <Center>
          <Text ClassName="lobster" bgGradient="linear(to-r, blue.600, purple.500, pink.600)" bgClip="text">Hi i'm <br />Leoda,<br /> web developer</Text>
        </Center>
      </Box>
      <Center>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="outline" m={5}>
          Contact Me
        </Button>
      </Center>
    </Box>
  )
}

export default Presentation
