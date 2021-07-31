import React from "react";
import { Icon, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EmailIcon } from "@chakra-ui/icons";
import { BsBriefcaseFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const iconColor = useColorModeValue("white", "white");

  return (
    <Grid templateColumns="repeat(4, 1fr)" w={["100%"]}>
      <GridItem colSpan={1} align="center">
        <Link to="/about">
          <Icon as={FaUserCircle} w={[5, 7]} h={[5, 7]} color={iconColor} />
        </Link>
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Link to="/works">
          <Icon as={BsBriefcaseFill} w={[5, 7]} h={[5, 7]} color={iconColor} />
        </Link>
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Link to="skills">
          <Icon as={SiJavascript} w={[5, 7]} h={[5, 7]} color={iconColor} />
        </Link>
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Link to="/contact">
          <EmailIcon w={[5, 7]} h={[5, 7]} color={iconColor} />
        </Link>
      </GridItem>
    </Grid>
  );
};

export default NavBar;
