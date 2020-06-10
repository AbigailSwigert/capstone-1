import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

export default function Header({searchInput, setSearchInput, itemCount, display}) {

    let history = useHistory();

    const handleSearchInputChange = e => setSearchInput(e.target.value);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            history.push('/searchpage')
        }
    };

    const clearSearch = () => setSearchInput('');

   return (
    <header className="App-header">
        <img src={process.env.PUBLIC_URL + './image-assets/n33dful-logo-01.png'} alt='n33dful.com logo' className='logo' />
        <nav className='nav' >
            <Link to='/productspage' onClick={clearSearch} >
                <div className='page-icon'>
                    <p className='page-name' >Products Page</p>
                    <img src={process.env.PUBLIC_URL + './image-assets/products-page.png'} className='menu-icon' alt='Products Page Icon' title='Products Page' />
                </div>
            </Link>
            <Link to='shoppingcart' onClick={clearSearch} >
                <div className='page-icon'>
                    <div className='item-count' style={display} >{itemCount}</div>
                    <p className='page-name' >Shopping Cart</p>
                    <img src={process.env.PUBLIC_URL + './image-assets/shopping-cart.png'} className='menu-icon' alt='Shopping Cart Page Icon' title='Shopping Cart' />
                </div>
            </Link>
            <DebounceInput type='text' placeholder='Search...' className='search-bar' debounceTimeout={-1} value={searchInput} onChange={handleSearchInputChange} onKeyDown={handleSearch} />
        </nav>
    </header>
   )
}