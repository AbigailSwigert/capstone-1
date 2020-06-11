import React from 'react';

export default function ThankYou() {
    return (
        <div className='thank-you'>
            <h1>Thank you for shopping with us!</h1>
            <img className='thumbs-up' src={process.env.PUBLIC_URL + './image-assets/quality.png'} alt='thumbs up icon' />
            <p>Your order has been placed and will ship within 7 - 10 business days</p>
            <h3>Please visit us again soon!</h3>
        </div>
    )
}