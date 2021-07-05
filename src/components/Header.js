import React from 'react'
import ThemeButton from './ThemeButton'
import { VStack, Box, Flex, HStack, SimpleGrid, Grid, GridItem, useColorModeValue } from '@chakra-ui/react'
import Logo from './Logo'

import NavBar from './NavBar';
const Header = () => {

  const backgroundColor = useColorModeValue("#fff", 'blue.900');

  return (
    <Box boxShadow="xl" position="fixed" w={'100%'} bgColor={backgroundColor}>
      <Grid
        templateColumns="repeat(10, 1fr)"
        gap={2}
      >
        <GridItem colSpan={3} >
          <Logo />
        </GridItem>
        <GridItem colSpan={6} pt={4}>
          <NavBar />
        </GridItem>
        <GridItem colSpan={1} >
          <VStack><ThemeButton /></VStack>
        </GridItem>
      </Grid>

    </Box>
  )
}

export default Header
