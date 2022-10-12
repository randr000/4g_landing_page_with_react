import React from 'react';
import MenuToggler from './menu-toggler.jsx';
import NavbarMenu from './navbar-menu.jsx';

const Navbar = ({links}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid px-lg-5">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <MenuToggler />
                <NavbarMenu links={links} />
            </div>
        </nav>
    );
};

export default Navbar;