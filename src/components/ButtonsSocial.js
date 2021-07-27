import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HStack, Icon, Link } from '@chakra-ui/react'

const ButtonsSocial = () => {
  return (
    <HStack>
      <Link href="https://linkedin.com/in/leonardo-d-angeli-9723b7177" isExternal>
        <Icon as={FaLinkedinIn} w={6} h={6} m={2} />
      </Link>
      <Link href="https://github.com/leod-e1" isExternal><Icon as={FaGithub} w={6} h={6} m="2" /></Link>
    </HStack>
  )
}

export default ButtonsSocial
