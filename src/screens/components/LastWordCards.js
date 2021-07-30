import React from "react";
import { Center, Wrap, Heading, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "../../components/reciclable/Card";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const LastWordCards = () => {
  const works = useSelector((state) => state.work);
  const lastThreCards = works.filter((items) => items.id >= works.length - 2);
  return (
    <>
      <Center my={5}>
        <Heading> My last works</Heading>
      </Center>
      <Center my={5}>
        <Wrap spacing={3} maxW={["90%", "80%"]}>
          <Card model={lastThreCards} />
        </Wrap>
      </Center>
      <Center mt={10}>
        <Link to="/works">
          <Button rightIcon={<ArrowForwardIcon />} variant="outline">
            Works Gallery
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default LastWordCards;
