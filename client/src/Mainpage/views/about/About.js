import React from 'react';
// import Header / Footer
import Header from '../../components/layout/Header.js';
import Footer from '../../components/layout/Footer.js';
// import sections
import Hero from '../../sections/about/Hero.js';
import FeaturesTiles from '../../sections/about/FeaturesTiles.js';
import FeaturesSplit from '../../sections/about/FeaturesSplit.js';
import TeamMember from '../../sections/about/TeamMember.js';
// import Cta from '../components/sections/Cta';

export default function About() {

    return (
        <div>
            <Header navPosition="right" className="reveal-from-bottom" />
            <br />
            <Hero />
            {/* <FeaturesTiles />
            <FeaturesSplit invertMobile topDivider imageFill /> */}
            <TeamMember />
            <Footer />
        </div>
    );
}