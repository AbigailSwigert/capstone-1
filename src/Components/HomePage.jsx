import React, { Fragment } from 'react';


export default function HomePage() {
    return (
        <Fragment>
            <img id='blmBanner' src={process.env.PUBLIC_URL + './image-assets/BLMbanner.jpg'} />
            <h1 id='blmText' >n33dful.com would like to show it support for the BLM movement, so this week our selection of books focuses heavily on non-fiction books on antiracism written by black authors.</h1>
        </Fragment>
    )
}