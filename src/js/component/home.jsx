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
	// return (
	// 	<div className="text-center">
	// 		<h1 className="text-center mt-5">Hello Rigo!</h1>
	// 		<p>
	// 			<img src={rigoImage} />
	// 		</p>
	// 		<a href="#" className="btn btn-success">
	// 			If you see this green button... bootstrap is working...
	// 		</a>
	// 		<p>
	// 			Made by{" "}
	// 			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
	// 			love!
	// 		</p>
	// 	</div>
	// );
	return (
		<Navbar links={links}/>
	)
};

export default Home;
