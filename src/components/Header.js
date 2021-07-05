import React from 'react'
import { VStack, HStack, Box, Flex, SimpleGrid, Grid, GridItem, useColorModeValue } from '@chakra-ui/react'
import Logo from './Logo'

import NavBar from './NavBar';
const Header = () => {

  const backgroundColor = useColorModeValue("#fff");

  return (
    <HStack bgColor={backgroundColor} position="sticky" top="0" boxShadow="xl" w={'100%'} p={2} zIndex="9">
      <Logo />
      <NavBar />
    </HStack>

  )
}

export default Header
