import React from 'react';

export default function ShoppingCart({shoppingCart}) {

    const emptyCart = () => {
        if (shoppingCart.length === 0) {
            return (
                'Your cart is empty'
            )
        }
    }

    return(
        <div className='shopping-cart'>
            <h1>Your Shopping Cart:</h1>
            <hr />
        <p className='empty-cart' >{emptyCart()}</p>
        </div>
    )
}