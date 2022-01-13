import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='flex-row'>
            <div className='contactFooter'>
                <NavLink exact to="/Contact" className='nav-linkFooter' activeClassName='nav-linkActiveFooter'>Contact</NavLink>
                <br />
                <a className='emailFooter' href='mailto:crystadianephotography@gmail.com'>crystadianephotography@gmail.com</a>
                <div>
                    <a className='icon' href='https://www.facebook.com/crystadianephotography' target='_blank'><FaFacebookF size='20px' /></a>
                    <a className='icon' href='https://www.instagram.com/crystadianephotography/' target='_blank'><FaInstagram size='20px' /></a>
                </div>
            </div>
            <div className='mainNameFooter'>
                <h1>
                    CRYSTA DIANE
                    <br />
                    PHOTOGRAPHY
                </h1>
            </div>
            <div className="copyright">
                <div className='copyrightText'>
                &copy;crystadianephotography
                <br />
                Created by: <a className='copyrightLink' href='https://github.com/austinxewell' target='_blank'>Austin Ewell</a>
                </div>
            </div>
        </footer>
    )
}
