import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

export default function PageNotFound(props) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        {props.title===undefined ? 404 : props.title}
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        {props.subtitle === undefined ? 'Pagina no encontrada' : props.subtitle}
      </Text>
      <Text color={'gray.500'} mb={6}>
        {props.msg === undefined ? 'La página que buscas no se encuentra disponible!.' : props.msg}
      </Text>

      <Link to={'/'}>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid">
          Volver al home
        </Button>
      </Link>
    </Box>
  );
}