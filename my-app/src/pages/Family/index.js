import React from 'react'
import '../Maternity/maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Family() {
    return (
        <div className='maternityWrapper'>
            <h2>FAMILY</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/familyImages/pic4.JPG')}></img>
                </div>
                <div className='collectionText paddingText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>

                    <p className='collectionPrice'>Price: $150</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>45-60 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>30+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                        <li className='collectionLeftListItem weddingListItem'>Suggested color palette guide (optional)</li>
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
                    <p className='collectionLeftPrice maternityPriceLeft'>Price: $90</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem weddingListItem'>25 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>30+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionLeftInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Maternity Picture' src={require('../../assets/familyImages/pic2.JPG')}></img>
                </div>
                {/* Dynamic HTML for mobil layout */}
                <div className='collectionPhoneText weddingCollectionLeftText paddingText'>
                    <h3 className='collectionPhoneTitle silverTitle silverPhoneTitle'>MINIATURE</h3>
                    <br />
                    <p className='collectionPhonePrice maternityPriceLeft silverPhonePrice'>Price: $90</p>
                    <br />
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem weddingListItem'>25 minutes</li>
                        <li className='collectionPhoneListItem weddingListItem'>30+ edited photos</li>
                        <li className='collectionListPhoneItem weddingListItem'>Online gallery with full print rights</li>
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
                            small={require(`../../assets/familyImages/pic3.JPG`)}
                            large={require(`../../assets/familyImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/familyImages/pic1.JPG`)}
                            large={require(`../../assets/familyImages/pic1.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tibble Fork'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
