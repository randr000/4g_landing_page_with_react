import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// importing components
import Navbar from "./navbar.jsx"

const links = [
	{linkText: 'Home', url: '#'},
	{linkText: 'About', url: '#'},
	{linkText: 'Services', url: '#'},
	{linkText: 'Contact', url: '#'},
];

//create your first component
const Home = () => {
	
	return (
		<Navbar links={links}/>
		
	)
};

export default Home;
