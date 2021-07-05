import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'

const ButtonBack = () => {
  return (
    <Link to="/">
      <ChevronLeftIcon h={10} w={10} p={2} bgColor={'gray.200'} rounded='50%' position="absolute" top="5" left="5" />
    </Link>
  )
}

export default ButtonBack
