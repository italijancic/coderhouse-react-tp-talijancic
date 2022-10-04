import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/system'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    mode: 'light',
  },
});

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Lista de Productos' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Lista de Productos' />} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='*' element={ <h1>404 Page not found</h1> }/>
          </Routes>

          <Footer />

        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
