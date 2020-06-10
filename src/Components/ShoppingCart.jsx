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
        return(
            <div className='cart-item'>
                <img src={process.env.PUBLIC_URL + item.img} alt={item.imgAlt} className='cart-item-img' />
                <div className='item-info'>
                    <h3 className='cart-item-name' >{item.name}</h3>
                    <p className='cart-item-author'>{item.author}</p>
                    <p className='cart-item-stock'>{item.stock} left in stock</p>
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