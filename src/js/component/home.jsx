import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// importing components
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from './footer.jsx';

const links = [
	{linkText: 'Home', url: '#'},
	{linkText: 'About', url: '#'},
	{linkText: 'Services', url: '#'},
	{linkText: 'Contact', url: '#'},
];

//create your first component
const Home = () => {
	
	return (
		<>
			<div  className="mx-3">
				<Navbar links={links}/>
				<Jumbotron />
				<Cards />
			</div>
			<Footer />
		</>
	);
};

export default Home;
