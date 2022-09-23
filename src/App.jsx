import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container } from '@mui/system'
import Footer from './components/Footer/Footer';

import ItemList from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    mode: 'light',
  },
});

// Functional component
function App() {

  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar />
        <ItemList greeting='Lista de Productos' />
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
