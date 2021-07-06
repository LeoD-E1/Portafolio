import React, { useState, useEffect } from 'react'
import { Box, Text, VStack, HStack, Progress } from '@chakra-ui/react'
import axios from 'axios'

const Skills = () => {

  const [skills, setSkills] = useState([])

  const getData = async () => {
    const res = await axios.get('/skills.json')
    setSkills([...res.data])
  }

  useEffect(() => {
    getData()
  }, [])

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
