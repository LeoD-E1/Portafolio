import React from 'react'
import { useSelector } from 'react-redux'
import { Heading, Image, Progress, Grid, GridItem, Flex, Text } from '@chakra-ui/react'

const LastSkills = () => {

  const skillsCompleted = useSelector(state => state.skill)
  const skills = skillsCompleted.filter(skill => skill.id >= skillsCompleted.length - 2)

  return (
    <Flex pt={5} px={3} justifyContent="center" h="93vh" alignItems="center"/* bgColor="#1B1F24" */>
      <Flex direction="column" w={["90%", "80%", "70%", "60%"]}>
        <Heading mb={5} align="center">Some Skills</Heading>
        {
          skills.map(skill => (
            <Grid templateColumns="repeat(7, 1fr)" p={1} key={skill.id} alignItems="center">
              <GridItem colSpan="1"><Image src={skill.image} boxSize={["30px", "50px", "70px"]} alt={skill.name} /></GridItem>
              <GridItem colSpan="3"><Text as="em" fontWeight="bold" fontSize={['sm', 'md', 'xl']}>{skill.name} - ({skill.level}%)</Text></GridItem>
              <GridItem colSpan="3"><Progress value={skill.level} size="xs" colorScheme="blue" isAnimated /></GridItem>
            </Grid>
          ))
        }
      </Flex>
    </Flex>
  )
}

export default LastSkills
