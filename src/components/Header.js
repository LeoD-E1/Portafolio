import React from "react";
import { HStack, useColorModeValue } from "@chakra-ui/react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  const backgroundColor = useColorModeValue("#fff", "#1B202C");

  return (
    <HStack
      bgColor={backgroundColor}
      position="sticky"
      top="0"
      boxShadow="xl"
      h={"7vh"}
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
