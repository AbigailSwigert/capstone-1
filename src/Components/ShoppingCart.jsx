import React from 'react';

export default function ShoppingCart({shoppingCart, setShoppingCart, setItemCount, itemCount}) {

    const emptyCart = () => {
        if (shoppingCart.length === 0) {
            return (
                <p className='empty-cart' >Your cart is empty</p>
            )
        }
    }

    const deleteItem = (itemId) => {
        setShoppingCart(shoppingCart.filter((item) => item.id !== itemId));
        setItemCount(itemCount - 1)
    }

    const cart = shoppingCart.map( (item) => {

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
                    <div>
                        <button className='item-count-btn' id='decrement' >-</button>
                        <input className='single-item-count' value={item.qty} />
                        <button className='item-count-btn' id='increment' >+</button>
                    </div>
                    <button className='remove-item' onClick={() => deleteItem(item.id)} >Remove this Item</button>
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