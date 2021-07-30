import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  const user = useSelector((state) => state.user);

  return (
    <Link to="/">
      <Heading fontSize={["xl", "2xl", "3xl"]} color="orangered" p={1}>
        <Text css={{ fontFamily: "Russo One, sans serif" }}>
          {user.nickname}
        </Text>
      </Heading>
    </Link>
  );
};

export default Logo;
