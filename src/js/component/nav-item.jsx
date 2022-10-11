import React from 'react';
import NavLink from './nav-link.jsx';

const NavItem = ({linkText, href, key}) => {
    return (
        <li key={key} className='nav-item'>
            <NavLink linkText={linkText} href={href ? href : '#'} />
        </li>
    );
};

export default NavItem;