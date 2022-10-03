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

// Functional component
function App() {

  // 1. Content our app on BrowserRouter
  // 2. Define routes
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <NavBar />

          {/* routers components */}
          <Routes>

            <Route path='/' element={<ItemListContainer greeting='Lista de Productos' />} />
            <Route path='/category/:categoryID' element={<ItemListContainer greeting='Lista de Productos' />} />

            {/* Defined parametric route */}
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
