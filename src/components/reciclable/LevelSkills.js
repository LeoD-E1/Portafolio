import React from "react";
import { Image, Progress, Grid, GridItem, Text } from "@chakra-ui/react";

const LevelSkills = ({ skills }) => {
  return (
    <>
      {skills.map((item) => (
        <Grid
          templateColumns="repeat(7, 1fr)"
          p={1}
          key={item.id}
          alignItems="center"
        >
          <GridItem colSpan="1">
            <Image
              src={item.image}
              boxSize={["30px", "50px", "70px"]}
              alt={item.name}
            />
          </GridItem>
          <GridItem colSpan="2">
            <Text as="em" fontWeight="bold" fontSize={["sm", "md", "xl"]}>
              {item.name}
            </Text>
            <Text color="orangered">{item.level}%</Text>
          </GridItem>
          <GridItem colSpan="4">
            <Progress
              value={item.level}
              size="xs"
              colorScheme="blue"
              isAnimated
            />
          </GridItem>
        </Grid>
      ))}
    </>
  );
};

export default LevelSkills;
