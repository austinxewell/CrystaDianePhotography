import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.css"

import { FaFacebookF, FaInstagram } from 'react-icons/fa'


export default function Nav() {

    return (
        <header className="">
            <div className='flex-row contact-header'>
                <h3><a href='mailto:crystadianephotography@gmail.com'>crystadianephotography@gmail.com</a><span className='phone-span'>801-800-0771</span></h3>
                <div className='media-icons'>
                    <a href='http://www.Facebook.com/' target='_blank'><FaFacebookF size='20px' /></a>
                    <a href='http://www.instagram.com' target='_blank'><FaInstagram size='20px' /></a>
                </div>
            </div>
            <div className='headerWrapper'>
                <div className='header-font'>
                    <h1>CRYSTADIANEPHOTOGRAPHY</h1>
                    <p className='headerPhone'>801-800-0771</p>
                    <div className='navBar'>
                        <NavLink exact to="/" className='nav-link' activeClassName='nav-linkActive'>Home</NavLink>
                        <NavLink exact to="/mediagallery" className='nav-link' activeClassName='nav-linkActive'>Media Gallery</NavLink>
                        <NavLink exact to="/services" className='nav-link' activeClassName='nav-linkActive'>Services</NavLink>
                        <NavLink to="/Contact" className='getInTouchButton'>Get In Touch</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}
