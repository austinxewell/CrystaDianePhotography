import React from 'react'
import './services.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Services() {
    return (
        <div className='servicesWrapper'>
                <h2 className='h2Title'>SERVICES</h2>
            <div className='serviceWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' src={require('../../assets/serviceImages/weddings.jpg')}></img>
                </div>
                <div className='collectionText'>
                    <h3 className='collectionTitle'>WEDDINGS</h3>
                    <p className='collectionPrice'>Price: $900+</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem'>Proposal</li>
                        <li className='collectionListItem'>Engagements</li>
                    </ul>
                    <NavLink 
                        exact to='/' 
                        className='collectionDetails'>
                        Click here to view more information.
                    </NavLink>
                    <br/>
                    <NavLink
                        exact to="/Contact"
                        
                        > <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                    <NavLink exact to="/mediagallery">
                        <span className='collectionGallery'>View Gallery</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
