import React from 'react';
import {
  // Button,
  ChakraProvider,
  theme ,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { CartContextProvider } from './contexts/CartContext'
import Cart from './components/Cart/Cart';
// import { sendDataToFirebase } from './services/firebase';

function App() {

  // function handlerHelper(){
  //   sendDataToFirebase()
  // }

  return (
    <CartContextProvider>

      <BrowserRouter>

        <ChakraProvider theme={theme}>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Nuestros productos' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Lista de Productos' />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>

          {/* <Button
            onClick={handlerHelper}
          >
            Enviar datos
          </Button> */}

          <Footer />

        </ChakraProvider>

      </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
