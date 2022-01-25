import React from 'react'
import '../Maternity/maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Couples() {
    return (
        <div className='maternityWrapper'>
            <h2>COUPLES</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/coupleImages/pic2.JPG')}></img>
                </div>
                <div className='collectionText paddingText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>
                    <p className='collectionPrice'>Price: $120</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>45-60 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>1 location</li>
                        <li className='collectionLeftListItem weddingListItem'>1 outfit change (optional)</li>
                        <li className='collectionLeftListItem weddingListItem'>25+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>
            {/* Mini */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionLeftText weddingCollectionLeftText'>
                    <h3 className='collectionLeftTitle silverTitle'>MINIATURE</h3>
                    <br />
                    <p className='collectionLeftPrice maternityPriceLeft'>Price: $75</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem weddingListItem'>20 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>15+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionLeftInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Maternity Picture' src={require('../../assets/coupleImages/pic1.JPG')}></img>
                </div>
                {/* Dynamic HTML for mobile Layout */}
                <div className='collectionPhoneText weddingCollectionLeftText paddingText'>
                    <h3 className='collectionPhoneTitle silverTitle silverPhoneTitle'>MINIATURE</h3>
                    <br />
                    <p className='collectionPhonePrice maternityPriceLeft silverPhonePrice'>Price: $75</p>
                    <br />
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem weddingListItem'>20 minutes</li>
                        <li className='collectionPhoneListItem weddingListItem'>15+ edited photos</li>
                        <li className='collectionPhoneListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                {/* End of dynamic mobile HTML */}
            </div>
            <div className='card-container'>
                <a className='flex-row'>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/coupleImages/pic3.JPG`)}
                            large={require(`../../assets/coupleImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/coupleImages/pic4.JPG`)}
                            large={require(`../../assets/coupleImages/pic4.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/coupleImages/pic5.JPG`)}
                            large={require(`../../assets/coupleImages/pic5.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
