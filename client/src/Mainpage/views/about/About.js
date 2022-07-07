import React from 'react';
// import Header / Footer
import Header from '../../components/layout/Header.js';
import Footer from '../../components/layout/Footer.js';
// import sections
import Hero from '../../sections/about/Hero.js';
import AboutUs from '../../sections/about/AboutUs.js';
import CompanyStory from '../../sections/about/CompanyStory.js';
import TeamMember from '../../sections/about/TeamMember.js';
// import Cta from '../components/sections/Cta';

export default function About() {

    return (
        <div>
            <Header navPosition="right" className="reveal-from-bottom" />
            <br />
            <br />
            <Hero />
            <AboutUs />
            <CompanyStory />
            <TeamMember />
            <Footer />
        </div>
    );
}