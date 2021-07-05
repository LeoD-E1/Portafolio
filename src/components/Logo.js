import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <Heading
        fontSize={["xl", "4xl"]}
        bgGradient="linear(to-r, blue.600, purple.500, pink.600)"
        bgClip="text"
        p={1}
      >
        <Text>Leoda</Text>
      </Heading>

    </Link>
  )
}

export default Logo
