import React from 'react'
import './maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Maternity() {
    return (
        <div className='maternityWrapper'>
            <h2>MATERNITY</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/maternityImages/pic2.JPG')}></img>
                </div>
                <div className='collectionText paddingText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>

                    <p className='collectionPrice'>Price: $120</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>45-60 minutes</li>
                        <li className='collectionLeftListItem weddingListItem'>30+ edited photos</li>
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
                            small={require(`../../assets/maternityImages/pic1.JPG`)}
                            large={require(`../../assets/maternityImages/pic1.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/maternityImages/pic3.JPG`)}
                            large={require(`../../assets/maternityImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/maternityImages/pic4.JPG`)}
                            large={require(`../../assets/maternityImages/pic4.JPG`)}
                            className='galleryImg'
                            alt='Family Session - Tunnel Springs'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
