import React, { useState, useEffect } from 'react'
import { Heading, Box, Image, Flex, Badge, Text, Link, HStack, Center } from '@chakra-ui/react'

const CardsWork = () => {
  const [works, setWorks] = useState('')

  const getWorks = async () => {
    const res = await fetch('/works.json')
    const data = await res.json()
    setWorks(data)
  }

  useEffect(() => {
    getWorks()
  }, [])

  return (
    <Box mt={5} px={4}>
      <Center><Heading>My Portfolio</Heading></Center>
      <Flex justifyContent="center">
        <HStack >
          {
            works &&
            works.map(work => (
              <Box p="5" maxW="320px" h={"420px"} borderWidth="1px" key={work.id} my={3} mx={1}>
                <Link href={work.link} isExternal >
                  <Image borderRadius="md" src={work.image} w="100%" objectFit="cover" h="200px" />
                </Link>
                <Flex align="baseline" my={4}>
                  <Badge colorScheme="pink">{work.id}</Badge>
                </Flex>
                <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                  {work.name}
                </Text>
                <Text mt={2}>{work.description}</Text>
              </Box>
            ))
          }
        </HStack>
      </Flex>
    </Box>

  )
}

export default CardsWork
