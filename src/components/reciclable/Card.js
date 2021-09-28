import React from "react";
import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Link,
  WrapItem,
} from "@chakra-ui/react";

const Card = ({ model }) => {
  return (
    <>
      {model.length > 0 ? (
        model.map((item) => (
          <Link href={item.link} key={item.id} isExternal>
            <WrapItem borderRadius="lg">
              <Box
                maxW="320px"
                boxShadow={"xl"}
                borderWidth="1px"
                borderRadius="lg"
                h="370px"
              >
                <Image src={item.portrait} h="200px" w="100%" rounded="md" />
                <Flex p={2} align="baseline" mt={2}>
                  <Badge px="2" bg="#3DADFF">
                    {item.date}
                  </Badge>
                </Flex>
                <Text
                  m={2}
                  fontSize="xl"
                  fontWeight="semibold"
                  lineHeight="short"
                >
                  {item.name}
                </Text>
                <Text fontSize="md" mx={2} noOfLines={[2, 3]}>
                  {item.description}
                </Text>
              </Box>
            </WrapItem>
          </Link>
        ))
      ) : (
        <Text fontSize={["md", "xl", "2xl"]}>Have not data loaded...</Text>
      )}
    </>
  );
};

export default Card;
