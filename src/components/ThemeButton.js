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
            alignSelf="flex-end"
            onClick={toggleColorMode}
            w={6}
            h={6}
            rounded="50%"
            bgColor="gray.200"
            p={1}
          /> :
          <SunIcon
            onClick={toggleColorMode}
            w={6}
            h={6}
            bgGradient="linear(to-r, blue.500, purple.400, pink.500)"
            rounded="50%"
            p={1}
          />
      }
    </Box>
  );
};

export default ThemeButton;
