import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <Link to='/'>Home</Link>
      </nav>
      <h1 className='heading text-center'>
      House Price Index
      </h1>
    </div>
  )
}

export default Header;