import './App.css';
import NavBar from  './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart'
import { CartContext } from './Functions/Context/CartContext';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <CartContext>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route  path='/categoria/:categoryId'>
            <ItemListContainer />
          </Route> 
          <Route path='/detail/:paramId'>
            <ItemDetailContainer />
          </Route> 
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
        </CartContext>
      </BrowserRouter>
    </div>
  );
}

export default App;