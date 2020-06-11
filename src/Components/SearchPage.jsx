import React from 'react';
import data from '../item-data.json';

export default function SearchPage({searchInput, addToCart}) {

    const results = data.filter( data => data.name.toLowerCase().includes(searchInput.toLowerCase()));
    const searchData = results.map( (data) => {
        if (results.length > 0) {
            return (
                <div className='product-card' key={data.id} >
                    <img src={process.env.PUBLIC_URL + data.img} alt={data.imgAlt} className='product-img' />
                    <div className='product-info'>
                        <p>{data.name}</p>
                        <p className='author'>By: {data.author}</p>
                        <p>${data.price}</p>
                    </div>
                    <button className='cart-btn' onClick={() => addToCart(data)} >Add to Cart</button>
                </div>
            )
        } else {
            return(
                <h1>Your search yielded no results.</h1>
            )
        }
    })

    return (
        <div className='products' >
            {searchData}
        </div>
    )
}