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
                <div class="dropdown">
                    <span class="nav-link dropBtn">Services</span>
                    <div class="dropdown-content">
                    <NavLink exact to="/services" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>All Services</NavLink>
                    <NavLink exact to="/Weddings" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Weddings</NavLink>
                    <NavLink exact to="/Maternity" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Maternity</NavLink>
                    <NavLink exact to="/IndividualHeadshots" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Individual/Headshots</NavLink>
                    <NavLink exact to="/Family" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Family</NavLink>
                    <NavLink exact to="/Couples" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Couples</NavLink>
                    <NavLink exact to="/Seniors" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>Seniors</NavLink>
                    <NavLink exact to="/SchoolDances" className='nav-linkDropdown' activeClassName='nav-linkActiveDropdown'>School Dances</NavLink>
                    </div>
                </div>
                <NavLink exact to="/Contact" className='nav-link' activeClassName='nav-linkActive'>Contact</NavLink>
            </div>
        </header>
    )
}
