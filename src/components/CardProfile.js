import React from "react";
import AvatarImage from "./reciclable/AvatarImage";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CardProfile = () => {
  const color = useColorModeValue("white", "gray.800");
  const color2 = useColorModeValue("gray.700", "gray.400");
  const user = useSelector((state) => state.user);

  return (
    <Center>
      <Box maxW={"1000px"} w={"full"} bg={color} overflow={"hidden"}>
        <Image
          h={"200px"}
          w={"full"}
          src={user.background}
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <AvatarImage size="2xl" />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              {user.name} {user.surname}
            </Heading>
            <Text color={"gray.500"}>{user.profession}</Text>
          </Stack>

          <Text textAlign={"left"} color={color2} px={3}>
            {user.description}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default CardProfile;
