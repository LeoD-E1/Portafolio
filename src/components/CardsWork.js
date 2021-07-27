import React from 'react'
import { Flex, Wrap } from '@chakra-ui/react'
import Card from './reciclable/Card'

import { useSelector } from 'react-redux'

const CardsWork = () => {

  const works = useSelector(state => state.work)

  return (
    <Flex justifyContent="center">
      <Wrap spacing={3} maxW="80%" >
        <Card model={works} />
      </Wrap>
    </Flex>
  )
}

export default CardsWork
