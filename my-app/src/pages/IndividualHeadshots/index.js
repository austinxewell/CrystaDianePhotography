import React from 'react'
import '../Maternity/maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function IndividualHeadshots() {
    return (
        <div className='maternityWrapper'>
            <h2>INDIVIDUAL <span className='slashSpan'>/</span> HEADSHOTS</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/individualHeadshotImages/pic1.JPG')}></img>
                </div>
                <div className='collectionText paddingText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>

                    <p className='collectionPrice'>Price: $120</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>45-60 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>20+ edited photos</li>
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
                    <p className='collectionLeftPrice'>Price: $65</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem weddingListItem'>15 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>10+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionLeftInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Maternity Picture' src={require('../../assets/individualHeadshotImages/pic2.JPG')}></img>
                </div>

                <div className='collectionPhoneText paddingText weddingCollectionLeftText'>
                    <h3 className='collectionPhoneTitle silverPhoneTitle silverTitle'>MINIATURE</h3>
                    <br />
                    <p className='collectionPhonePrice  silverPhonePrice'>Price: $65</p>
                    <br />
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem weddingListItem'>15 minutes</li>
                        <li className='collectionPhoneListItem weddingListItem'>10+ edited photos</li>
                        <li className='collectionPhoneListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>



            </div>
            <div className='card-container'>
                <a className='flex-row'>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/individualHeadshotImages/pic3.JPG`)}
                            large={require(`../../assets/individualHeadshotImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
