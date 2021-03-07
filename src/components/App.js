import { React, useEffect } from "react";
import { jarallax } from "jarallax";
import Header from "./Header/Header";
import Portfolio from "./Portfolio/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "jarallax/dist/jarallax.css";
import "jarallax/dist/jarallax";
import "jarallax/dist/jarallax-element";

function App() {
	useEffect(() => {
		jarallax(document.querySelectorAll(".jarallax"), {
			speed: 0.7,
		});
	});
	return (
		<>
			<Header />
			<Portfolio />
		</>
	);
}

export default App;
