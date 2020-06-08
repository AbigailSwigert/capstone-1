import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import data from './item-data.json';
import Header from './Components/Header';
import updateData from './Components/ProductCard'
import ShoppingCart from './Components/ShoppingCart';

function App() {

  const [newData, setNewData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect( () => {
    setNewData(updateData);
  }, [])

  const handleSearchInputChange = e => setSearchInput(e.target.value);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setNewData([])
      const results = data.filter( data => data.name.toLowerCase().split(' ').includes(searchInput.toLowerCase()));
      const searchData = results.map( (data) => {
        return (
          <div className='product-card' key={data.id} >
            <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
            <div className='product-info'>
              <p>{data.name}</p>
              <p className='author'>By: {data.author}</p>
              <p>${data.price}</p>
            </div>
            <button className='cart-btn' >Add to Cart</button>
          </div>
        )
      });
      setNewData(searchData);
    }
  };

  return (
    <Fragment>
      <Header handleSearch={handleSearch} handleSearchInputChange={handleSearchInputChange} searchInput={searchInput} updateData={updateData} setNewData={setNewData} />
      <div className='products' >
        {newData}
        <ShoppingCart shoppingCart={shoppingCart} />
      </div>
    </Fragment>
  );
}

export default App;
