import React from "react";
import './Hero.css'
import Crypto from '../assets/hero-img.svg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                {/*Left Side*/}
                <div className="left">
                    <h1>Invest in Cryptocurrencies with Our Programs</h1>
                    <p>Buy, sell and trade cryptocurrencies using our professionals exclusive programs.</p>
                    <div className="input-container">
                        <button className="btn">Lear More</button>
                    </div>
                </div>

                {/*Right Side*/}
                <div className="right">
                    <div className="img-container">
                    <img className="hero-image" src={Crypto} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero