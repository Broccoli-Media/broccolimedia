import React from 'react';
// import Header / Footer
import Header from '../components/layout/Header.js';
import Footer from '../components/layout/Footer.js';
// import sections
import Hero from '../sections/home/Hero.js';
import FeeIntro from '../sections/home/FeeIntro.js';
import FeaturesTiles from '../sections/home/FeaturesTiles.js';
import FeaturesSplit from '../sections/home/FeaturesSplit.js';
import CompanyPartners from '../sections/home/CompanyPartners.js';

export default function Home() {

	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" />
			<br />
			<br />
			<Hero />
			<FeaturesTiles />
			<FeaturesSplit />
			<CompanyPartners />
			<FeeIntro />
			<Footer />
		</div>
	);
}