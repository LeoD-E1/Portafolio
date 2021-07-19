import React from "react";
import { useColorMode, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={4}>
      {
        colorMode === "light" ?
          <MoonIcon
            position="fixed"
            bottom="2"
            right="2"
            onClick={toggleColorMode}
            w={8}
            h={8}
            rounded="50%"
            bgColor="gray.200"
            p={2}
          /> :
          <SunIcon
            position="fixed"
            bottom="2"
            right="2"
            onClick={toggleColorMode}
            w={8}
            h={8}
            bgColor="teal"
            rounded="50%"
            p={2}
          />
      }
    </Box>
  );
};

export default ThemeButton;
