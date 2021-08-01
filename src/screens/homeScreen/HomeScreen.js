import React from "react";
import { Box } from "@chakra-ui/react";
import Presentation from "../../components/Presentation";
import LastSkills from "../components/LastSkills";
import Header from "../../components/nav/Header";
import LastWordCards from "../components/LastWordCards";

const HomeScreen = () => {
  return (
    <Box h={"100vh"}>
      <Header />
      <Presentation />
      <LastWordCards />
      <LastSkills />
    </Box>
  );
};

export default HomeScreen;
