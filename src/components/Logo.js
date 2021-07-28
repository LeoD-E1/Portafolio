import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Heading fontSize={["xl", "2xl", "4xl"]} color="orangered" p={1}>
        <Text>Leoda</Text>
      </Heading>
    </Link>
  );
};

export default Logo;
