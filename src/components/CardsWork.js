import React from 'react';
import { Flex, Wrap } from '@chakra-ui/react';
import Card from './reciclable/Card';

const CardsWork = ({ repos, stop }) => {
  return (
    <Flex justifyContent='center'>
      <Wrap
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {repos.slice(0, stop).map((work) => (
          <Card data={work} key={work.id} />
        ))}
      </Wrap>
    </Flex>
  );
};

export default CardsWork;
