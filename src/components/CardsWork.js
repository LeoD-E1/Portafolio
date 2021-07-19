import React from 'react'
import { Box, Image, Flex, Badge, Text, Link, Center, Wrap, WrapItem } from '@chakra-ui/react'

import { useSelector } from 'react-redux'

const CardsWork = () => {

  const works = useSelector(state => state.work)

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
                    <Image src={work.portrait} h="200px" w="100%" rounded="md" />
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
            <Text fontSize={["md", "xl", "2xl"]}>Have not Works loaded...</Text>
          )
        }
      </Wrap>
    </Center>
  )
}

export default CardsWork
