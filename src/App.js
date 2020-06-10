import React, {useState} from 'react';
import './App.css';
import data from './item-data.json';
import Header from './Components/Header';
import ProductPage from './Components/ProductPage'
import ShoppingCart from './Components/ShoppingCart';
import SearchPage from './Components/SearchPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [newData, setNewData] = useState([data]);
  const [searchInput, setSearchInput] = useState('');
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (obj) => {
    setShoppingCart(shoppingCart.concat(obj))
  }

  return (
    <Router>
      <Header setNewData={setNewData} searchInput={searchInput} setSearchInput={setSearchInput} />
      <Switch>
        <Route path='/' exact render={(props) => <ProductPage {...props} newData={newData} />} />
        <Route path='/productspage' render={(props) => <ProductPage {...props} newData={newData} addToCart={addToCart}  />} />
        <Route path='/shoppingcart' render={(props) => <ShoppingCart {...props} shoppingCart={shoppingCart} /> } />
        <Route path='/searchpage' render={(props) => <SearchPage {...props} setNewData={setNewData} searchInput={searchInput} />} />
      </Switch>
    </Router>
  );
}

export default App;
