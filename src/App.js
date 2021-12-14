import './App.css';
import NavBar from  './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route path='categoria/:idCategoria' element={<ItemListContainer />}/> 
          <Route path='/detail/:paramId' element={<ItemDetailContainer />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;