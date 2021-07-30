import React from "react";
import {
  Center,
  Icon,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import { BsBriefcaseFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const iconColor = useColorModeValue("orangered", "white");

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={3} w="100%">
      <GridItem colSpan={1}>
        <Link to="/about">
          <Center>
            <Icon as={FaUserCircle} w={5} h={5} color={iconColor} />
          </Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1}>
        <Link to="/works">
          <Center>
            <Icon as={BsBriefcaseFill} w={5} h={5} color={iconColor} />
          </Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1}>
        <Link to="skills">
          <Center>
            <Icon as={SiJavascript} w={5} h={5} color={iconColor} />
          </Center>
        </Link>
      </GridItem>

      <GridItem colSpan={1}>
        <Link to="/contact">
          <Center>
            <EmailIcon w={5} h={5} color={iconColor} />
          </Center>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
