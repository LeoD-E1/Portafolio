import React from 'react'
import { Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <SimpleGrid p={4}>
        <Heading
          fontSize={["xl", "4xl"]}
          bgGradient="linear(to-r, blue.600, purple.500, pink.600)"
          bgClip="text"
        >
          <Text>Leoda</Text>
        </Heading>
      </SimpleGrid>
    </Link>
  )
}

export default Logo
