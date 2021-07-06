import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/react'

const ButtonBack = () => {

  const backgroundColor = useColorModeValue('gray.200', 'teal')

  return (
    <Link to="/">
      <ChevronLeftIcon h={10} w={10} p={2} bgColor={backgroundColor} rounded='50%' position="absolute" top="5" left="5" />
    </Link>
  )
}

export default ButtonBack
