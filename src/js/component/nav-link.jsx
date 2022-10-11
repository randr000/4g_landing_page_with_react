import React from 'react';

const NavLink = ({text, href}) => {
    return (
        <a className="nav-link" href={href ? href : '#'}>
            {text}
        </a>
    );
};

export default NavLink;