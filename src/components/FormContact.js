import React, { useState } from "react";
import {
  Heading,
  Flex,
  Input,
  Textarea,
  Button,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const FormContact = () => {
  const backgroundColor = useColorModeValue("gray.100", "gray.700");

  const initialState = {
    email: "",
    subject: "",
    message: "",
  };

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    e.target.reset();
  };

  const [message, setMessage] = useState(initialState);

  return (
    <Flex h="93vh" alignItems="center" justifyContent="center">
      <Flex direction="column" bgColor={backgroundColor} p={12} rounded={6}>
        <Heading mb={5} color="orangered" fontSize="2xl" bgGradient="linear(to-r, blue.600, pink.500, red.600)" bgClip="text">
          Send me an E-mail
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="juancito@gmail.com"
            variant="flushed"
            mb={3}
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Subject"
            variant="flushed"
            mb={3}
            type="text"
            name="subject"
            onChange={handleChange}
          />
          <Textarea
            placeholder="Message"
            variant="flushed"
            mb={6}
            name="message"
            onChange={handleChange}
            required
          />
          <Center>
            <Button
              rightIcon={<ArrowForwardIcon />}
              size="md"
              bgGradient="linear(to-r, blue.600, pink.500, red.600)"
              color="white"
              mb={4}
              type="submit"
              w={["100%", "25%"]}
            >
              Send
            </Button>
          </Center>
        </form>
      </Flex>
    </Flex>
  );
};

export default FormContact;
