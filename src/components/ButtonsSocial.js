import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HStack, Icon, Link } from "@chakra-ui/react";

const ButtonsSocial = () => {
  return (
    <HStack>
      <Link
        href="https://linkedin.com/in/leonardo-d-angeli-9723b7177"
        isExternal
      >
        <Icon
          as={FaLinkedinIn}
          w={10}
          h={10}
          p={2}
          rounded="full"
          css={{ border: "1px solid #999", transition: "all 200ms ease-in " }}
          _hover={{
            bg: "orangered",
            color: "white",
            border: "1px solid orangered",
          }}
        />
      </Link>
      <Link href="https://github.com/leod-e1" isExternal>
        <Icon
          as={FaGithub}
          w={10}
          h={10}
          p={2}
          css={{ border: "1px solid #999", transition: "all 200ms ease-in " }}
          rounded="full"
          _hover={{
            bg: "orangered",
            color: "white",
            border: "1px solid orangered",
          }}
        />
      </Link>
    </HStack>
  );
};

export default ButtonsSocial;
