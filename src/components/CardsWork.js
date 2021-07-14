import React, { useState, useEffect } from 'react'
import { Heading, Box, Image, Flex, Badge, Text, Link, HStack, Center, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const CardsWork = () => {

  const works = useSelector(state => state.work)

  /* const [works, setWorks] = useState('')

  const getWorks = async () => {
    const res = await fetch('/works.json')
    const data = await res.json()
    setWorks(data)
  }

  useEffect(() => {
    getWorks()
  }, []) */

  return (
    <Center>
      <Wrap spacing={3} maxW="80%">
        {
          works.length > 0 ? (
            works.map((work) => (
              <Link href={work.link} key={work.id} isExternal>
                <WrapItem borderRadius="lg" >
                  <Box
                    maxW="320px"
                    boxShadow={"xl"}
                    borderWidth="1px"
                    borderRadius="lg"
                    h="370px"
                  >
                    <Image src={work.portrait} h="200px" w="100%" />
                    <Flex p={2} align="baseline" mt={2}>
                      <Badge px="2" colorScheme="teal">{work.id}</Badge>
                    </Flex>
                    <Text m={2} fontSize="xl" fontWeight="semibold" lineHeight="short">{work.name}</Text>
                    <Text fontSize="md" mx={2}>{work.description}</Text>

                  </Box>
                </WrapItem>
              </Link>
            ))
          ) : (
            <Text fontSize={["md", "2xl", "3xl"]}>Have not Works loaded...</Text>
          )
        }
      </Wrap>
    </Center>
  )
}

export default CardsWork
