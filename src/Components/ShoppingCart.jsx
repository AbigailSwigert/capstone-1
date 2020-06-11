import React, { Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function ShoppingCart({shoppingCart, setShoppingCart, setItemCount, itemCount, setDisplayCount, total, updateTotal, deleteAll}) {

    const [disabled, setDisabled] = useState(false);

    const emptyCart = () => {
        if (shoppingCart.length === 0) {
            return (
                <p className='empty-cart' >Your cart is empty</p>
            )
        }
    }

    const deleteItem = (itemName) => {
        setShoppingCart(shoppingCart.filter((item) => item.id !== itemName.id));
        setItemCount(itemCount - 1);
        if (itemCount === 1) {
            setDisplayCount({visibility:'hidden'})
        } else if (shoppingCart.length <= 1) {
            updateTotal(0);
        }
        updateTotal(total - itemName.price)
        shoppingCart.map( item => {
            if (item.stock === 0) {
               setDisabled(false)
            }
        })
    }

    const showDeleteBtn = () => {
        if (shoppingCart.length > 0) {
            return (
                <button className='remove-all-btn' onClick={deleteAll} >Remove all items from cart</button>
            )
        }
    }

    useEffect(() => {
        shoppingCart.map( item => {
            if (item.stock === 0) {
               setDisabled(true)
               alert(item.name + ' is currently out of stock, please remove it from cart to proceed')
            }
        })
    },[])

    const showTotal = () => {
         if (shoppingCart.length > 0) {
            return (
                <Fragment>
                    <hr />
                    <div className='checkout'>
                        <p className='total'>Total: {total.toFixed(2)} </p>
                        <Link to='/checkout'><button className='buy-btn' disabled={disabled} >Check Out</button></Link>
                    </div>
                </Fragment>
            )
        }
    }


    const cart = shoppingCart.map( (item) => {

        return(
            <div className='cart-item' key={item.id} >
                <img src={process.env.PUBLIC_URL + item.img} alt={item.imgAlt} className='cart-item-img' />
                <div className='item-info'>
                    <h3 className='cart-item-name'>{item.name}</h3>
                    <p className='cart-item-isbn'>ISBN: {item.isbn}</p>
                    <p className='cart-item-pub'>Publisher: {item.publisher}</p>
                    <p className='cart-item-stock'>{item.stock} left in stock</p>
                </div>
                <div className='count-n-price'>
                    <p className='cart-item-price'>${item.price}</p>
                    <button className='remove-item' onClick={() => deleteItem(item)} >Remove this Item</button>
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
            {showDeleteBtn()}
            {showTotal()}
        </div>
    )
}