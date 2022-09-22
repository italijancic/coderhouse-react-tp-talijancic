import { Container } from '@mui/system';

import ItemList from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


// Functional component
function App() {

  return (
    <div>
      <Container maxWidth="xl">
        <NavBar/>
        <ItemList greeting='Lista de Productos'/>
      </Container>
    </div>
  );
}

export default App;
