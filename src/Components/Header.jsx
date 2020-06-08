import React from 'react';

export default function Header({setNewData, updateData, searchInput, handleSearch, handleSearchInputChange}) {

    const goToAllProducts = () => setNewData(updateData);
    const goToShoppingCart = () => {
        setNewData([]);
    }

   return (
    <header className="App-header">
        <img src={process.env.PUBLIC_URL + './image-assets/n33dful-logo-01.png'} alt='n33dful.com logo' className='logo' />
        <nav className='nav' >
            <div className='page-icon' onClick={goToAllProducts} >
                <img src={process.env.PUBLIC_URL + './image-assets/products-page.png'} className='menu-icon' alt='Products Page Icon' title='Products Page' />
                <p className='page-name' >Products Page</p>
            </div>
            <a href='#'>
                <div className='page-icon' onClick={goToShoppingCart} >
                    <img src={process.env.PUBLIC_URL + './image-assets/shopping-cart.png'} className='menu-icon' alt='Shopping Cart Page Icon' title='Shopping Cart' />
                    <p className='page-name' >Shopping Cart</p>
                </div>
            </a>
            <input type='text' placeholder='Search...' className='search-bar' value={searchInput} onChange={handleSearchInputChange} onKeyDown={handleSearch} />
        </nav>
    </header>
   )
}