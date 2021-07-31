import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ButtonBack from "../components/ButtonBack";

const AboutMe = () => {
  const color = useColorModeValue("white", "gray.900");
  const color2 = useColorModeValue("gray.700", "gray.400");
  const user = useSelector((state) => state.user);
  const hobbies = user.hobbies;

  return (
    <>
      <ButtonBack />
      <Center py={6}>
        <Box
          w={["320px", "600px", "900px"]}
          bg={color}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={["2xl"]}
            src={user.image}
            alt={"Leoda"}
            mb={4}
            pos={"relative"}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {user.name} {user.surname}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {user.instagram}
          </Text>
          <Text textAlign={"left"} color={color2} px={3}>
            {user.description}
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {hobbies.map((hobbie) => (
              <Badge px={2} py={1} fontWeight={"400"} color={"blue.400"}>
                <Text as="u">{`#${hobbie}`}</Text>
              </Badge>
            ))}
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
    </>
  );
};

export default AboutMe;
