import React from 'react'
import '../Maternity/maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function SchoolDances() {
    return (
        <div className='maternityWrapper'>
            <h2>SCHOOL DANCE</h2>
            {/* Standard */}
            <div className='serviceWrapper flex-row packageWrapper'>
                <div className='collectionWrapper '>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/schoolDanceImages/pic5.JPG')}></img>
                </div>
                <div className='collectionText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>STANDARD</h3></div>
                    <p className='collectionPrice'>Price: $20</p>
                    <p className='collectionPrice'>(Per Couple)</p>
                    <p className='collectionPrice'>$50 minimum</p>
                    <ul className='collectionList'>
                        <li className='collectionLeftListItem weddingListItem'>15-60 minutes (determined by couple amount)</li>
                        <li className='collectionLeftListItem weddingListItem'>5+ photos back per couple</li>
                        <li className='collectionLeftListItem weddingListItem'>Group photos</li>
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
                            small={require(`../../assets/schoolDanceImages/pic1.JPG`)}
                            large={require(`../../assets/schoolDanceImages/pic1.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/schoolDanceImages/pic3.JPG`)}
                            large={require(`../../assets/schoolDanceImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/schoolDanceImages/pic4.JPG`)}
                            large={require(`../../assets/schoolDanceImages/pic4.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/schoolDanceImages/pic2.JPG`)}
                            large={require(`../../assets/schoolDanceImages/pic2.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/schoolDanceImages/pic6.JPG`)}
                            large={require(`../../assets/schoolDanceImages/pic6.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
