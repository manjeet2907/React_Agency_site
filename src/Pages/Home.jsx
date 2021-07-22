import React from 'react';
import heroimage from '../images/home.png';
import Header from './Components/Header';


function Home() {
    return (
        <div className="home">
            <Header heading1="Grow Your Busiess with " subtitle="We are team of proffessionals making your online business profitable and smoother"
                transfer="/service" btn="Get Started" heroimage={heroimage}
            />

        </div>
    )
}

export default Home
