import React from 'react'
import { Center, Box, Heading, Flex, Stack, Button, Text, Icon, HStack, VStack, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { EmailIcon } from '@chakra-ui/icons'
import { BsBriefcaseFill } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { FaUserCircle } from 'react-icons/fa'


const NavBar = () => {
  return (

    <Grid templateColumns="repeat(4, 1fr)" gap={3} w="100%" >
      <GridItem colSpan={1} >
        <Link to="/contact">
          <Center><EmailIcon w={5} h={5} /></Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1} >
        <Link to="/works">
          <Center><Icon as={BsBriefcaseFill} w={5} h={5} /></Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1} >
        <Link to="skills">
          <Center><Icon as={SiJavascript} w={5} h={5} /></Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1} >
        <Link to="/about">
          <Center><Icon as={FaUserCircle} w={5} h={5} /></Center>
        </Link>
      </GridItem>
    </Grid>


  )
}

export default NavBar
