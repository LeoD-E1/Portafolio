import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, VStack, HStack, Progress } from '@chakra-ui/react'

const Skills = () => {

  const skills = useSelector(state => state.skill)

  return (
    <Box pt={5} h="100vh" px={4} /* bgColor="#1B1F24" */>
      <Text>Skills page</Text>
      {
        skills.map(skill => (
          <Box p={3} mb={1} key={skill.id}>
            <Text>{skill.name} ({skill.level})%</Text>
            <Progress value={skill.level} size="xs" colorScheme="red" />
          </Box>
        ))
      }
    </Box>
  )
}

export default Skills
