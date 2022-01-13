import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.css"




export default function Nav() {
    return (
        <header className="">
            <div className='flex-row navBar'>
                <NavLink exact to="/" className='nav-link' activeClassName='nav-linkActive'>Home</NavLink>
                <NavLink exact to="/mediagallery" className='nav-link' activeClassName='nav-linkActive'>Media Gallery</NavLink>
                <div className='mainName'>
                    <h1>
                        CRYSTA DIANE
                        <br />
                        PHOTOGRAPHY
                    </h1>
                </div>
                <NavLink exact to="/services" className='nav-link' activeClassName='nav-linkActive'>Services</NavLink>
                <NavLink exact to="/Contact" className='nav-link' activeClassName='nav-linkActive'>Contact</NavLink>
            </div>
        </header>
    )
}
