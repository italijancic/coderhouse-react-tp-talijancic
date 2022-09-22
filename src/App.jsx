import ItemList from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

// Functional component
function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemList greeting='Lista de Productos'/>
    </div>
  );
}

export default App;
