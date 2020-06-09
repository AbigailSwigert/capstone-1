import React from 'react';
import data from '../item-data.json';


export default function ProductPage({newData, setNewData}) {

  newData = data.map( (data) => {
    return (
      <div className='product-card' key={data.id} >
        <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
        <div className='product-info'>
          <p>{data.name}</p>
          <p className='author'>By: {data.author}</p>
          <p>${data.price}</p>
          <button className='cart-btn' >Add to Cart</button>
        </div>
      </div>
    )
  });


  return(
    <div className='products' >
      {newData}
    </div>
  )
}