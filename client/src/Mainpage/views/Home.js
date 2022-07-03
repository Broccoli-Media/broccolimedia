import React from 'react';
// import Header / Footer
import Header from '../components/layout/Header.js';
import Footer from '../components/layout/Footer.js';
// import sections
import Hero from '../sections/home/Hero.js';
import FeaturesTiles from '../sections/home/FeaturesTiles.js';
import FeaturesSplit from '../sections/home/FeaturesSplit.js';
// import Cta from '../components/sections/Cta';

export default function Home () {

	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" />
			<br />
			<br />
			<Hero />
			<FeaturesTiles />
			<FeaturesSplit invertMobile topDivider imageFill />
			<Footer />
		</div>
	);
}