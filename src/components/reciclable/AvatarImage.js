import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AvatarImage = ({ size }) => {
  const user = useSelector((state) => state.user);
  return (
    <Avatar
      size={size}
      src={user.image}
      alt={user.name + " " + user.surname}
      mb={4}
      pos={"relative"}
    />
  );
};

export default AvatarImage;
