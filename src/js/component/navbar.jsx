import React from 'react';

// import NavbarNav from './navbar-nav.jsx';

const Navbar = ({links}) => {

    // let Arr = links.map((e, i) => {
    //     return <li classNameName="nav-item" key={i}>{e[i].linkText}</li>;
    // })

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid px-lg-5">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler text-light border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <div className="collapse navbar-collapse align-self-stretch" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;