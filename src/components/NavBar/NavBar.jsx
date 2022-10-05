import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Icon,
  Text,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ImAppleinc } from 'react-icons/im'
import { ColorModeSwitcher } from '../ColorModeSwitcher/ColorModeSwitcher';
import { Link as ReachLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Links = ['iPhone', 'iPad', 'MacBook'];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={{ base: 4, sm: 20, lg: 30, '2xl': 40 }}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={3} alignItems={'center'}>
          <Link as={ReachLink} to={'/'}>
            <Icon as={ImAppleinc} w={6} h={6} ml={{ base: 5, md: 0 }} />
          </Link>
          <Link
            as={ReachLink}
            to={'/'}
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
            }}>
            <Text fontSize={'lg'} display={{ base: 'none', lg: 'block' }}>
              Apple Reconquista
            </Text>
          </Link>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>

        </HStack>

        <Spacer />

        <HStack spacing={8} alignItems={'center'}>
          <CartWidget />
          <ColorModeSwitcher />
          <Avatar display={{ base: 'none', md: 'block' }} />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}

    </Box>
  );
}

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