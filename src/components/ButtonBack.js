import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useColorModeValue } from '@chakra-ui/react'

const ButtonBack = () => {

  const backgroundColor = useColorModeValue('gray.200', 'teal')

  return (
    <Link to="/">
      <ChevronLeftIcon h={8} w={8} p={1} bgColor={backgroundColor} rounded='50%' position="fixed" top="2" left="2" />
    </Link>
  )
}

export default ButtonBack
