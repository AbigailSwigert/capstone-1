import React from 'react';

export default function ShoppingCart({shoppingCart}) {

    const emptyCart = () => {
        if (shoppingCart.length === 0) {
            return (
                <p className='empty-cart' >Your cart is empty</p>
            )
        }
    }

    const cart = shoppingCart.map( item => {

        const handleCountChange = e => item.count = e.target.value

        return(
            <div className='cart-item' key={item.id} >
                <img src={process.env.PUBLIC_URL + item.img} alt={item.imgAlt} className='cart-item-img' />
                <div className='item-info'>
                    <h3 className='cart-item-name' >{item.name}</h3>
                    <p className='cart-item-author'>{item.author}</p>
                    <p className='cart-item-stock'>{item.stock} left in stock</p>
                </div>
                <div className='count-n-price'>
                    <p className='cart-item-price'>${item.price}</p>
                    <button className='item-count-btn' id='decrement' onClick={() => item.count - 1} >-</button>
                    <input className='single-item-count' value={item.count} onChange={handleCountChange} />
                    <button className='item-count-btn' id='increment' onClick={() => item.count + 1} >+</button>
                    <button className='remove-item'>Remove this Item</button>
                </div>
            </div>
        )
    })

    return(
        <div className='shopping-cart'>
            <h1>Your Shopping Cart:</h1>
            <hr />
            {emptyCart()}
            {cart}
        </div>
    )
}