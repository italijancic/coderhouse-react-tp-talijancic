import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>

      <ChakraProvider theme={theme}>

        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Nuestros productos' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Lista de Productos' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNotFound /> } />
        </Routes>

        <Footer />

      </ChakraProvider>

    </BrowserRouter>
  );
}

export default App;
