import React from "react";
import { Center, Wrap } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../../components/reciclable/Card";

const LastWordCards = () => {
  const works = useSelector((state) => state.work);
  const lastThreCards = works.filter((items) => items.id >= works.length - 2);
  return (
    <Center>
      <Wrap spacing={3} maxW={["90%", "80%"]}>
        <Card model={lastThreCards} />
      </Wrap>
    </Center>
  );
};

export default LastWordCards;
