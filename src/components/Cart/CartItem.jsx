import React from 'react'
import {
  Container,
  Button,
  Stack,
  Heading,
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  StackDivider,
  Center,
  Box,
  Show,
} from '@chakra-ui/react';

export default function CartItem({item, removeItem}) {
  return (
    <>
      <Show above='md'>
        <Grid
          py={'10px'}
          templateRows={{ base: 'repeat(2, 1fr)', md: 'repeat(1, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(6, 1fr)' }}
          gap={5}
        >

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Center>
              <Flex>
                <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={item.img}
                  fit={'cover'}
                />
              </Flex>
            </Center>
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 4 }}>
            <Stack
              spacing={{ base: .5, sm: 1 }}
              divider={
                <StackDivider
                  borderColor={'gray.600'}
                />
              }>
              <Heading
                lineHeight={1.1}
                fontWeight={300}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                {item.title}
              </Heading>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Precio: U$S ${item.price}`}
              </Text>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Cantidad: ${item.count}`}
              </Text>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Total: U$S ${item.price}`}
              </Text>

              <Button
                alignSelf={'end'}
                onClick={() => removeItem(item.id)}
                colorScheme='teal'
                variant='ghost'
                my={'10px'}
                px={0}
              >
                Eliminar
              </Button>

            </Stack>
          </GridItem>
        </Grid>
      </Show>

      <Show below='md'>
        <Container>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={item.img}
              fit={'cover'}
            />
          </Flex>
          <Box py={'30px'}>
            <Stack
              spacing={{ base: .5, sm: 1 }}
              divider={
                <StackDivider
                  borderColor={'gray.600'}
                />
              }>
              <Heading
                lineHeight={1.1}
                fontWeight={300}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                {item.title}
              </Heading>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Precio: U$S ${item.price}`}
              </Text>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Cantidad: ${item.count}`}
              </Text>
              <Text
                color={'gray.500'}
                fontWeight={300}
                fontSize={'xl'}>
                {`Total: U$S ${item.price}`}
              </Text>

              <Button
                alignSelf={'end'}
                onClick={() => removeItem(item.id)}
                colorScheme='teal'
                variant='ghost'
                my={'10px'}
                px={0}
              >
                Eliminar
              </Button>
            </Stack>
          </Box>
        </Container>
      </Show>
    </>
  )
}
