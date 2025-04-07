import React from 'react';
import NavMenu from './NavMenu';
function Header({ setCategory, setSelectedGenre }) {
    return (
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* App Title */}
          <h1 className="text-2xl font-bold">Movie App</h1>
  
          {/* Navbar Component */}
          <NavMenu setCategory={setCategory} setSelectedGenre={setSelectedGenre} />
        </div>
      </header>
    );
  }
  
  export default Header;