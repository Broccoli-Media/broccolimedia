import React from 'react';
// import Header / Footer
import Header from '../components/layout/Header.js';
import Footer from '../components/layout/Footer.js';
// import sections
import Hero from '../components/sections/Hero.js';
import FeaturesTiles from '../components/sections/FeaturesTiles.js';
import FeaturesSplit from '../components/sections/FeaturesSplit.js';
import TeamMember from '../components/sections/TeamMember.js';
import UserCards from '../components/sections/UserCards.js'
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
			<TeamMember topDivider />
			<UserCards />
			<Footer />
		</div>
	);
}