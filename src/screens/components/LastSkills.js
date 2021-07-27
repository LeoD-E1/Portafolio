import React from "react";
import { useSelector } from "react-redux";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import LevelSkills from "../../components/reciclable/LevelSkills";

const LastSkills = () => {
  const skillsCompleted = useSelector((state) => state.skill);
  const skills = skillsCompleted.filter(
    (skill) => skill.id >= skillsCompleted.length - 2
  );

  return (
    <Flex
      pt={5}
      px={3}
      justifyContent="center"
      h="50vh"
      alignItems="center" /* bgColor="#1B1F24" */
    >
      <Flex direction="column" w={["90%", "80%", "70%", "60%"]}>
        <Heading mb={5} align="center">
          Some Skills
        </Heading>
        <LevelSkills skills={skills} />
        <Link to="/skills" align="center">
          <Button mt="10px" rightIcon={<ArrowForwardIcon />} variant="outline">
            Skills
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default LastSkills;
