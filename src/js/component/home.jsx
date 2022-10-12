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
		<div  className="mx-3">
			<Navbar links={links}/>
			<section style={{marginTop: "72px"}}>
				<div className="container-fluid bg-light mt-3 py-3 px-lg-5">
					<div className="row">
						<div className="col col-12">
							<h1 className="display-1">A Warm Welcome!</h1>
							<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, soluta eum! Provident dolore nostrum placeat amet tempore nesciunt fugit delectus illo eligendi quisquam dignissimos accusantium, aut atque dolorem quae corrupti?</p>
							<button className="btn btn-primary">Call to action!</button>
						</div>
					</div>
				</div>
			</section>
		</div>
		
	)
};

export default Home;
