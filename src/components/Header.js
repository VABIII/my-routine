import React from 'react';
import '../styles/Header.css'

const Header = () => {
    const token = localStorage.getItem('token');

    return (
        <div className='header'>
            <a href="/">Home</a>
            {!token && <a href="/signup">Sign Up</a>}
            {!token && <a href="/login">Login</a>}
            {token && <a href="/logout">Logout</a>}

        </div>
    );
};

export default Header;
















































