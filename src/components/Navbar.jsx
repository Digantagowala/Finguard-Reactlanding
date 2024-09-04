import React from 'react';
import NavItem from './NavItem.jsx';
import Logo from './Logo.jsx';
import SearchBar from './searchBar.jsx';
import AuthButtons from './AuthButtons.jsx';
// import FirstAnDiv from './FirstAnDiv.jsx';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mt-3 px-8 py-4">
     
      <ul className="flex items-center">
        <NavItem  text="Find designers"/>
        <NavItem text="Inspiration" />
        <NavItem text="Jobs" />
        <NavItem text="Go Pro" />
      </ul>

      {/* i will attach the logo later */}
      <Logo />

      
      <div className="flex items-center space-x-6">
        <SearchBar />
        <AuthButtons />
        <NavItem />
        {/* <FirstAnDiv/> */}
      </div>
    </nav>
  );
};

export default Navbar;
