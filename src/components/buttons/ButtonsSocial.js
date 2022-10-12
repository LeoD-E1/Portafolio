import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HStack, Icon, Link } from '@chakra-ui/react';

const ButtonsSocial = () => {
  const [social] = useState([
    {
      id: 0,
      name: 'linkedin',
      icon: FaLinkedinIn,
      link: 'https://linkedin.com/in/leodadev',
    },
    {
      id: 1,
      name: 'github',
      icon: FaGithub,
      link: 'https://github.com/leod-e1',
    },
  ]);
  return (
    <HStack>
      {social.map((obj) => (
        <Link key={obj.id} href={obj.link} isExternal>
          <Icon
            as={obj.icon}
            w={10}
            h={10}
            p={2}
            css={{
              border: '1px solid #999',
              transition: 'all 300ms ease-in',
              color: 'white',
            }}
            _hover={{
              bg: '#3DADFF',
              color: 'white',
              border: '1px solid #3DADFF',
              borderRadius: '50%',
            }}
          />
        </Link>
      ))}
    </HStack>
  );
};

export default ButtonsSocial;
