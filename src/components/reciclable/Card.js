import React from 'react';
import { Box, Flex, Badge, Text, Link } from '@chakra-ui/react';

const Card = ({ data }) => {
  return (
    <Box
      w='auto'
      boxShadow={'xl'}
      borderWidth='1px'
      borderRadius='lg'
      h='auto'
      maxW='300px'
      maxH='170px'
    >
      <Text m={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
        <Link href={data.link} key={data.id} isExternal>
          {data.name.toLowerCase()}
        </Link>
      </Text>
      <Flex p={2} align='baseline' mt={2}>
        <Badge px='2' bg='#3DADFF'>
          {data.created_at}
        </Badge>
      </Flex>
      <Text fontSize='md' mx={2} noOfLines={[2, 3]}>
        {data.description}
      </Text>
    </Box>
  );
};

export default Card;
