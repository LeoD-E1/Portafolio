import React from "react";
import AvatarImage from "./reciclable/AvatarImage";
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CardProfile = () => {
  const color = useColorModeValue("white", "gray.900");
  const color2 = useColorModeValue("gray.700", "gray.400");
  const user = useSelector((state) => state.user);
  const { hobbies, social } = user;

  return (
    <Center py={6}>
      <Box
        w={["320px", "600px", "900px"]}
        bg={color}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <AvatarImage size="2xl" />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.name} {user.surname}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {social.instagram}
        </Text>
        <Text textAlign={"left"} color={color2} px={3}>
          {user.description}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          {hobbies.map((hobbie) => (
            <Badge
              px={2}
              py={1}
              fontWeight={"400"}
              color={"blue.400"}
              key={hobbie}
            >
              <Text as="u">{`#${hobbie}`}</Text>
            </Badge>
          ))}
        </Stack>
      </Box>
    </Center>
  );
};

export default CardProfile;
