import React from "react";
import { Box } from "@chakra-ui/react";
import FormContact from "../../components/FormContact";
import ButtonBack from "../../components/buttons/ButtonBack";

const Contact = () => {
  return (
    <Box h="100vh">
      <FormContact />
      <ButtonBack />
    </Box>
  );
};

export default Contact;
