import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

function Item({ product }) {
  return (
    // Card box container
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      width={{ base: 'xs', sm: 'sm', xl:'lg' }}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >

      {/* New product green dot */}
      {product.new && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="green.200"
        />
      )}

      <Link to={`/item/${product.id}`}>
        {/* Product img */}
        <Image
          src={product.img}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '500px' }}
        />
      </Link>

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {product.new ? (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
              New
            </Badge>
          ) :
            (<Badge></Badge>)}
        </Box>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {product.title}
          </Box>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1.2em'}>
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              U$S
            </Box>
            {` ${product.price}`}
          </Box>
        </Flex>
        <Text
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          {` ${product.stock} unidades`}
        </Text>
      </Box>
    </Box>
  );
}

export default Item;
