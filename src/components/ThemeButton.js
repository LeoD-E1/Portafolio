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
            w={[8, 10, 12]}
            h={[8, 10, 12]}
            rounded="50%"
            bgColor="gray.200"
            p={[2, 3, 4]}
          /> :
          <SunIcon
            position="fixed"
            bottom="2"
            right="2"
            onClick={toggleColorMode}
            w={[8, 10, 12]}
            h={[8, 10, 12]}
            bgColor="teal"
            rounded="50%"
            p={[2, 3, 4]}
          />
      }
    </Box>
  );
};

export default ThemeButton;
