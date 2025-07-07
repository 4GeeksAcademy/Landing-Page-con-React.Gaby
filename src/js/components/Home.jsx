import React from "react";

import { Navbar } from "./Navbar.jsx";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (

		<>
			<Navbar title="Arte Callejero"/>
			<Jumbotron />
			<div className="container pt-5">
				<div className="row">
					<Card/>
				</div>
			</div>
			<Footer/>

		</>
	);
};

export default Home;