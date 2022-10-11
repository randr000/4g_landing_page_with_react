import React from 'react';

import NavbarNav from './navbar-nav.jsx';

const Navbar = ({links}) => {
    return (
        <div className='collapse navbar-collapse'>
            <NavbarNav links={links}/>
        </div>
    );
};

export default Navbar;