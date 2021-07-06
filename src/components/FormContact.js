import React, { useState } from 'react'
import { Heading, Flex, Input, Textarea, Button, Center, useColorModeValue } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const FormContact = () => {

  const backgroundColor = useColorModeValue("gray.100", "gray.700")

  const initialState = {
    email: "",
    subject: "",
    message: "",
  }

  const handleChange = (e) => {
    setMail({
      ...mail,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(mail);
    e.target.reset()
  }

  const [mail, setMail] = useState(initialState)

  return (
    <Flex h="100%" alignItems="center" justifyContent="center">
      <Flex direction="column" bgColor={backgroundColor} p={12} rounded={6}>
        <Heading mb={5} bgGradient="linear(to-r, teal.500,green.500)" bgClip="text" fontSize="2xl"> Send me an E-mail </Heading>
        <form onSubmit={handleSubmit}>
          <Input placeholder="juancito@gmail.com" variant="filled" mb={3} type="email" name="email" onChange={handleChange} required />
          <Input placeholder="Subject" variant="filled" mb={3} type="text" name="subject" onChange={handleChange} />
          <Textarea placeholder="Message" variant="filled" mb={6} name="message" onChange={handleChange} required />
          <Center><Button rightIcon={<ArrowForwardIcon />} size="md" colorScheme="teal" mb={4} type="submit" w={["100%", "25%"]}>Send</Button></Center>
        </form>
      </Flex>
    </Flex>
  )
}

export default FormContact