import React from 'react'
import {FaTelegram, FaLinkedin, FaTwitter, FaDiscord} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Coin<span className='primary'>Pro</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaTelegram className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaDiscord className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                </div>
                <div>
                    <p className='copyright'><a href='https://www.linkedin.com/in/francismd/' _target="_blank">Coded by Francis MD</a></p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer