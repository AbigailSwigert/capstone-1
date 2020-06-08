import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import data from './item-data.json';
import Header from './Components/Header';

function App() {

  const [newData, setNewData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect( () => {
    const updateData = data.map( (data) => {
      return (
        <a key={data.id} href='#' >
          <div className='product-card' >
            <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
            <div className='product-info'>
              <p>{data.name}</p>
              <p className='author'>By: {data.author}</p>
              <p>${data.price}</p>
            </div>
          </div>
        </a>
      )
    });
    setNewData(updateData);
  }, [])

  const handleSearchInputChange = e => setSearchInput(e.target.value);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setNewData([])
      const results = data.filter( data => data.name.toLowerCase().split(' ').includes(searchInput.toLowerCase()));
      const searchData = results.map( (data) => {
        return (
          <a key={data.id} href='#' >
            <div className='product-card' >
              <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
              <div className='product-info'>
                <p>{data.name}</p>
                <p className='author'>By: {data.author}</p>
                <p>${data.price}</p>
              </div>
            </div>
          </a>
        )
      });
      setNewData(searchData);
    }
  };

  return (
    <Fragment>
      <Header handleSearch={handleSearch} handleSearchInputChange={handleSearchInputChange} searchInput={searchInput} />
      <div className='products' >
        {newData}
      </div>
    </Fragment>
  );
}

export default App;
