import React from 'react';
// import Header / Footer
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
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
			<Testimonial topDivider />
			<Footer />
		</div>
	);
}