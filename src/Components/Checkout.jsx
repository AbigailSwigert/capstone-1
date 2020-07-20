import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Checkout({deleteAll}) {

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [cardExp, setCardExp] = useState('');
    const [cardSec, setCardSec] = useState('');

    const handleNameChange = (e) => setFullName(e.target.value);
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleRegionChange = (e) => setRegion(e.target.value);
    const handleZipChange = (e) => setZip(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleCardNameChange = (e) => setCardName(e.target.value);
    const handleCardNumChange = (e) => setCardNum(e.target.value);
    const handleCardExpChange = (e) => setCardExp(e.target.value);
    const handleCardSecChange = (e) => setCardSec(e.target.value);

    return (
        <form id='checkout' >
            <div className='checkout-form'>
                <label>
                    Full Name:<br />
                    <input className='checkout-input' required type='text' value={fullName} onChange={handleNameChange} />
                </label><br />
                <label>
                    Address:<br />
                    <input className='checkout-input' required type='text' value={address} onChange={handleAddressChange} />
                </label><br />
                <label>
                    City:<br />
                    <input className='checkout-input' required type='text' value={city} onChange={handleCityChange} />
                </label><br />
                <label>
                    State/Province/Region:<br />
                    <input className='checkout-input' required type='text' value={region} onChange={handleRegionChange} />
                </label><br />
                <label>
                    Zip Code:<br />
                    <input className='checkout-input' required type='text' value={zip} onChange={handleZipChange} />
                </label><br />
                <label>
                    Email:<br />
                    <input className='checkout-input' required type='Email' value={email} onChange={handleEmailChange} />
                </label>
            </div>
            <div className='payment'>
                <h1>Enter Payment Information:</h1>
                <label>
                    Name on card: <br />
                    <input type='text' className='checkout-input' required value={cardName} onChange={handleCardNameChange} />
                </label><br />
                <label>
                    Card number: <br />
                    <input type='text' className='checkout-input' required value={cardNum} onChange={handleCardNumChange} />
                </label><br />
                <div id='exp-sec' >
                    <label>
                        Expiration Date: <br />
                        <input type='text' className='smaller-input' required value={cardExp} onChange={handleCardExpChange} />
                    </label>
                    <label>
                        Security Code: <br />
                        <input type='text' className='smaller-input' required value={cardSec} onChange={handleCardSecChange} />
                    </label>
                </div>
                <Link to='/thankyou'>
                    <button className='order-btn' type='submit' onClick={deleteAll} >Submit Order</button>
                </Link>
            </div>
        </form>
    )
}