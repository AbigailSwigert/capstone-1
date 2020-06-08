import React from 'react';

export default function Header(props) {

    

   return (
    <header className="App-header">
        <img src={process.env.PUBLIC_URL + './image-assets/n33dful-logo-01.png'} alt='n33dful.com logo' className='logo' />
        <nav className='nav' >
            <a href='#'>
                <div className='page-icon'>
                    <img src={process.env.PUBLIC_URL + './image-assets/products-page.png'} className='menu-icon' alt='Products Page Icon' title='Products Page' />
                    <p className='page-name' >Products Page</p>
                </div>
            </a>
            <a href='#'>
                <div className='page-icon'>
                    <img src={process.env.PUBLIC_URL + './image-assets/shopping-cart.png'} className='menu-icon' alt='Shopping Cart Page Icon' title='Shopping Cart' />
                    <p className='page-name' >Shopping Cart</p>
                </div>
            </a>
            <input type='text' placeholder='Search...' className='search-bar' value={props.searchInput} onChange={props.handleSearchInputChange} onKeyDown={props.handleSearch} />
        </nav>
    </header>
   )
}