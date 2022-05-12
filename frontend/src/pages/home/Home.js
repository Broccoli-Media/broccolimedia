import React, { useState, useEffect  } from "react";

import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';
import "./Home.css";

export default function Home() {

	const [query, setQuery] = useState('')
	const [chars, setChars] = useState([])
  	const [isLoading, setIsLoading] = useState(true)

	  useEffect(() => {
		const fetchChars = async () => {
		  const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
	
		  setChars(result.data)
		  setIsLoading(false)
		}
	
		fetchChars()
	  }, [query])

	return (
		<div>
			<Navbar />
			<Header />

			{/* Full Content */}
			<div className="Main-content">
				{/* Company Intro */}
				<div className="Intro" >
					<h1 className="w3-border-bottom w3-border-light-grey w3-padding-16">
						About
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</p>
				</div>

				{/* Main Delivery Methods */}
				<div className="w3-container w3-padding-32" id="projects">
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
						Projects
					</h3>
				</div>

				{/* Ranking */}
				{/* <CharacterGrid isLoading={isLoading} chars={chars} /> */}

				{/* Apply */}
			</div>

			<Footer />
		</div>
	);
}
