import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  HStack,
} from '@chakra-ui/react';

import { ImAppleinc } from 'react-icons/im'
import { Link as ReachLink } from 'react-router-dom'

const categories = ['iPhone', 'iPad', 'MacBook']

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            <HStack spacing={2} alignItems={'center'}>
              <Icon as={ImAppleinc} w={6} h={6} ml={{ base: 5, md: 0 }} />
              <Text fontSize={'lg'}>
                Apple Reconquista
              </Text>
            </HStack>
            </Box>
            <Text fontSize={'sm'}>
              © 2022 D&T soluciones. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Productos</ListHeader>
            {categories.map((category) => (
              <NavLink key={category}>{category}</NavLink>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
            <Link>Centro de ayuda</Link>
            <Link>Envíos y pagos</Link>
            <Link>Contacto</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Redes Sociales</ListHeader>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const NavLink = ({ children }) => (
  <Link
    as={ReachLink} to={`/category/${children}`}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>
);