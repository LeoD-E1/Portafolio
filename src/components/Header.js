import React from "react";
import { HStack, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  const backgroundColor = useColorModeValue("transparent", "#1B202C");

  return (
    <HStack
      bgColor={backgroundColor}
      position="sticky"
      top="0"
      h="5vh"
      w={"100%"}
      p={2}
      zIndex="9"
    >
      <Logo />
      <NavBar />
    </HStack>
  );
};

export default Header;
