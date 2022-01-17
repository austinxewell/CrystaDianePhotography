import React from 'react'
import './services.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Services() {
    return (
        <div className='servicesWrapper'>
            <h2 className='h2Title'>SERVICES</h2>

            {/* Wedding Service */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/weddingImages/pic7.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <h3 className='collectionTitle'>WEDDINGS</h3>
                    <p className='collectionPrice'>Price: $900+</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem'>Proposal</li>
                        <li className='collectionListItem'>Engagements</li>
                        <li className='collectionListItem'>Multiple Packages</li>
                    </ul>
                    <NavLink exact to="/Weddings">
                        <span className='collectionDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>

            {/* Maternity Service */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionLeftText'>
                    <h3 className='collectionLeftTitle'>MATERNITY</h3>
                    <br />
                    <p className='collectionLeftPrice'>Price: $120</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem'>45-60 Minutes</li>
                        <li className='collectionLeftListItem'>30+ Edited Photos </li>
                    </ul>
                    <NavLink exact to="/Maternity">
                        <span className='collectionLeftDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <div className='random'>
                        <NavLink exact to="/mediagallery">
                            <a className='collectionLeftGallery'>View Gallery</a>
                        </NavLink>
                        <NavLink exact to="/Contact">
                            <button className='collectionLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                        </NavLink>
                    </div>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Maternity Picture' src={require('../../assets/maternityImages/pic1.JPG')}></img>
                </div>
                {/* Dynamic html for mobile layout. */}
                <div className='collectionPhoneText'>
                    <h3 className='collectionPhoneTitle'>MATERNITY</h3>
                    <p className='collectionPhonePrice'>Price: $120</p>
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem'>45-60 Minutes</li>
                        <li className='collectionPhoneListItem'>30+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/Weddings">
                        <span className='collectionPhoneDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionPhoneGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                {/* end of dynamic mobile HTML */}
            </div>

            {/* Individual/Headshots */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='Individual/Headshot Picture' src={require('../../assets/individualHeadshotImages/pic3.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <h3 className='collectionTitle'>
                        INDIVIDUAL -
                        <br />
                        HEADSHOTS
                    </h3>
                    <p className='collectionPrice'>Price: $65+</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem'>35-45 Minutes</li>
                        <li className='collectionListItem'>15+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/IndividualHeadshots">
                        <span className='collectionDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>

            {/* Family Service */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionLeftText'>
                    <h3 className='collectionLeftTitle'>FAMILY</h3>
                    <br />
                    <p className='collectionLeftPrice'>Price: $90+</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem'>45-60 Minutes</li>
                        <li className='collectionLeftListItem'>20+ Edited Photos </li>
                    </ul>
                    <NavLink exact to="/Family">
                        <span className='collectionLeftDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <div className='random'>
                        <NavLink exact to="/mediagallery">
                            <a className='collectionLeftGallery'>View Gallery</a>
                        </NavLink>
                        <NavLink exact to="/Contact">
                            <button className='collectionLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                        </NavLink>
                    </div>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Family Picture' src={require('../../assets/familyImages/pic1.JPG')}></img>
                </div>
                {/* Dynamic html for mobile layout. */}
                <div className='collectionPhoneText'>
                    <h3 className='collectionPhoneTitle'>FAMILY</h3>
                    <p className='collectionPhonePrice'>Price: $90+</p>
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem'>45-60 Minutes</li>
                        <li className='collectionPhoneListItem'>20+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/Weddings">
                        <span className='collectionPhoneDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionPhoneGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                {/* end of dynamic mobile HTML */}
            </div>

            {/* Couples */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='Couples Picture' src={require('../../assets/coupleImages/pic3.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <h3 className='collectionTitle'>COUPLES</h3>
                    <p className='collectionPrice'>Price: $75+</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem'>45-60 Minutes</li>
                        <li className='collectionListItem'>25+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/Couples">
                        <span className='collectionDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>

            {/* Seniors */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionLeftText'>
                    <h3 className='collectionLeftTitle'>SENIORS</h3>
                    <br />
                    <p className='collectionLeftPrice'>Price: $100</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem'>45-60 Minutes</li>
                        <li className='collectionLeftListItem'>25+ Edited Photos </li>
                    </ul>
                    <NavLink exact to="/Seniors">
                        <span className='collectionLeftDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <div className='random'>
                        <NavLink exact to="/mediagallery">
                            <a className='collectionLeftGallery'>View Gallery</a>
                        </NavLink>
                        <NavLink exact to="/Contact">
                            <button className='collectionLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                        </NavLink>
                    </div>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Senior Picture' src={require('../../assets/seniorImages/pic3.JPG')}></img>
                </div>
                {/* Dynamic html for mobile layout. */}
                <div className='collectionPhoneText'>
                    <h3 className='collectionPhoneTitle'>FAMILY</h3>
                    <p className='collectionPhonePrice'>Price: $100</p>
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem'>45-60 Minutes</li>
                        <li className='collectionPhoneListItem'>25+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/Weddings">
                        <span className='collectionPhoneDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionPhoneGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                {/* end of dynamic mobile HTML */}
            </div>

            {/* School Dance */}
            <div className='serviceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='School Dance Picture' src={require('../../assets/schoolDanceImages/pic1.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <h3 className='collectionTitle'>
                        SCHOOL
                        <br />
                        DANCE
                    </h3>
                    <p className='collectionPrice'>Price: $50+</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem'>15-60 Minutes</li>
                        <li className='collectionListItem'>15+ Edited Photos</li>
                    </ul>
                    <NavLink exact to="/SchoolDances">
                        <span className='collectionDetails'>More Details</span>
                    </NavLink>
                    <br />
                    <NavLink exact to="/mediagallery">
                        <span className='collectionGallery'>View Gallery</span>
                    </NavLink>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
