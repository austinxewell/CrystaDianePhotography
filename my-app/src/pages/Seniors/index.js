import React from 'react'
import '../Maternity/maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Seniors() {
    return (
        <div className='maternityWrapper'>
            <h2>SENIORS</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/seniorImages/pic1.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>

                    <p className='collectionPrice'>Price: $100</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>45-60 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>1 location</li>
                        <li className='collectionLeftListItem weddingListItem'>2 outfit changes (optional)</li>
                        <li className='collectionLeftListItem weddingListItem'>25+ edited photos</li>
                        <li className='collectionListItem weddingListItem'>Online gallery with full print rights</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>
            <div className='card-container'>
                <a className='flex-row'>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/seniorImages/pic2.JPG`)}
                            large={require(`../../assets/seniorImages/pic2.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/seniorImages/pic3.JPG`)}
                            large={require(`../../assets/seniorImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
