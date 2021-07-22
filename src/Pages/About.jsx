import React from 'react';
import Header from './Components/Header';
import heroimage from '../images/about.png';

function About() {
    return (
        <div className="about">
            <Header heading1="Know about our team at " subtitle="We are proud to have a trained team of professionals"
                transfer="/contact" btn="Contact Us" heroimage={heroimage}/>
        </div>
    )
}

export default About;
