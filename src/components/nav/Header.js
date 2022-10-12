import React from 'react';
import { HStack, useColorModeValue } from '@chakra-ui/react';
import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  const backgroundColor = useColorModeValue('blackAlpha.500', '#1B202C');

  return (
    <HStack bgColor={backgroundColor} position='fixed' w={'100%'} p={4}>
      <Logo />
      <NavBar />
    </HStack>
  );
};

export default Header;
