import React, { Fragment } from 'react';
import data from '../item-data.json'


export default function HomePage() {
    return (
        <Fragment>
            <img id='blmBanner' src={process.env.PUBLIC_URL + './image-assets/BLMbanner.jpg'} />
            <h1 id='blmText' >n33dful.com would like to show its support for the BLM movement, so this week our selection of books focuses heavily on non-fiction books on antiracism written by black authors.</h1>
            <div className='img-container'>
                <img className='home-imgs' src={process.env.PUBLIC_URL + data[2].img} />
                <img className='home-imgs' src={process.env.PUBLIC_URL + data[3].img} />
                <img className='home-imgs' src={process.env.PUBLIC_URL + data[4].img} />
                <img className='home-imgs' src={process.env.PUBLIC_URL + data[5].img} />
            </div>
        </Fragment>
    )
}