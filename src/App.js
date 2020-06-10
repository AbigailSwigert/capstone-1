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
  const [itemCount, setItemCount] = useState(0);
  const [displayCount, setDisplayCount] = useState({visibility: 'hidden'})

  const addToCart = (obj) => {
    setShoppingCart(shoppingCart.concat(obj));
    setItemCount(itemCount + 1)
    setDisplayCount({visibility:'visible'})
  }

  return (
    <Router>
      <Header setNewData={setNewData} searchInput={searchInput} setSearchInput={setSearchInput} itemCount={itemCount} display={displayCount} />
      <Switch>
        <Route path='/' exact render={(props) => <ProductPage {...props} newData={newData} addToCart={addToCart} />} />
        <Route path='/productspage' render={(props) => <ProductPage {...props} newData={newData} addToCart={addToCart} />} />
        <Route path='/shoppingcart' render={(props) => <ShoppingCart {...props} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} itemCount={itemCount} setItemCount={setItemCount} /> } />
        <Route path='/searchpage' render={(props) => <SearchPage {...props} setNewData={setNewData} searchInput={searchInput} addToCart={addToCart} />} />
      </Switch>
    </Router>
  );
}

export default App;
