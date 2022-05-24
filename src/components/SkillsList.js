import React from "react";
import { useSelector } from "react-redux";
import { Heading, Flex } from "@chakra-ui/react";
import LevelSkills from "./reciclable/LevelSkills";

const SkillsList = () => {
  const skills = useSelector((state) => state.skill);

  return (
    <Flex
      pt={5}
      px={3}
      justifyContent="center"
      h="93vh"
      alignItems="center" /* bgColor="#1B1F24" */
    >
      <Flex direction="column" w={["90%", "80%", "70%", "60%"]}>
        <Heading mb={5} align="center">
          Some Skills
        </Heading>
        <LevelSkills skills={skills} />
      </Flex>
    </Flex>
  );
};

export default SkillsList;
