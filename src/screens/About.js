import React from "react";
import { Avatar, Flex, VStack, Text } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Flex bgColor="orangered" justifyContent="center" alignItems="center">
      <Flex>
        <VStack>
          <Avatar src="" size="200px" boxShadow="xl" w={"50%"} />
          <Text>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
            dolor sit amet, consectetur
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
