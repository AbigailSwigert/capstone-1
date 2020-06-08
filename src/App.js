import React, { Fragment } from 'react';
import './App.css';
import data from './item-data.json';
import Header from './Components/Header'

function App() {

  const newData = data.map( (data) => {
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
  })

  return (
    <Fragment>
      <Header />
      <div className='products' >
        {newData}
      </div>
    </Fragment>
  );
}

export default App;
