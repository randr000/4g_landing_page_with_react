import React from 'react';

import NavItem from './nav-item.jsx';

const NavbarNav = ({links}) => {
    
    let linkArray = links.map((e, i) => {
        return <NavItem linkText={e.linkText} href={e.url} key={i} />
    });

    return (
        <ul>
            {linkArray}
        </ul>
    );
};

export default NavbarNav;