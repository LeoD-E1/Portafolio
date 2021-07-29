import React from "react";
import {
  Text,
  Button,
  VStack,
  Flex,
  useBreakpointValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import ButtonsSocial from "./ButtonsSocial";
import { useSelector } from "react-redux";

const Presentation = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Flex
      w={"full"}
      h={["93vh", "95vh"]}
      backgroundImage={"url(https://wallpaperaccess.com/full/3497712.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      backgroundAttachment={"fixed"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={8}>
          <Stack spacing={0}>
            <Text
              color={"white"}
              fontWeight={300}
              fontSize={useBreakpointValue({ base: "md", md: "xl" })}
            >
              Hi, my name is
            </Text>
            <Heading
              color={"white"}
              fontWeight={700}
              fontSize={useBreakpointValue({
                base: "4xl",
                md: "5xl",
                lg: "6xl",
              })}
            >
              Leonardo D'angeli,
            </Heading>
            <Text
              color={"white"}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              fontWeight={700}
            >
              I solve your web development problems
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Link to="/contact">
              <Button
                leftIcon={<EmailIcon />}
                bg="transparent"
                css={{
                  border: "1px solid white",
                  transition: "all 300ms ease",
                }}
                color={"white"}
                _hover={{ bg: "orangered", border: "1px solid orangered" }}
              >
                Get in touch
              </Button>
            </Link>
          </Stack>
        </Stack>
        <ButtonsSocial />
      </VStack>
    </Flex>
  );
};

export default Presentation;
