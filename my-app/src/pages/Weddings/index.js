import React from 'react'
import './weddings.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import ModalImage from 'react-modal-image'

export default function Weddings() {
    return (
        <div className='weddingServiceWrapper'>
            <h2>WEDDINGS</h2>

            {/* Gold */}
            <div className='serviceWrapper goldServiceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/weddingImages/pic1.JPG')}></img>
                </div>
                <div className='collectionText specificPackageText'>
                    <div className='goldTitleWrapper'><h3 className='collectionTitle goldTitle'>GOLD</h3></div>

                    <p className='collectionPrice'>Price: $1300</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem weddingListItem'>8 hours of wedding day coverage with a second shooter</li>
                        <li className='collectionListItem weddingListItem'> 1.5 hour engagement, bridal, or formal session</li>
                        <li className='collectionListItem weddingListItem'>Editing & online delivery of all images</li>
                        <li className='collectionListItem weddingListItem'>Flashdrive of all images</li>
                        <li className='collectionListItem weddingListItem'>Canvas print</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionInquire specificPackageInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
            </div>

            {/* Silver */}
            <div className='serviceWrapper silverServiceWrapper packageWrapper flex-row'>
                <div className='collectionLeftText weddingCollectionLeftText'>
                    <h3 className='collectionLeftTitle silverTitle'>SILVER</h3>
                    <br />
                    <p className='collectionLeftPrice'>Price: $1100</p>
                    <br />
                    <ul className='collectionLeftList'>
                        <li className='collectionLeftListItem weddingListItem'>6 hours of wedding day coverage</li>
                        <li className='collectionLeftListItem weddingListItem'>1.5 hour engagement, bridal, or formal session</li>
                        <li className='collectionListItem weddingListItem'>Editing &#38; online delivery of all images</li>
                        <li className='collectionListItem weddingListItem'>Flashdrive of all images</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionLeftInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                <div className='collectionLeftWrapper'>
                    <img className='collectionLeftImg' alt='Maternity Picture' src={require('../../assets/weddingImages/pic2.JPG')}></img>
                </div>
                {/* Dynamic HTML for mobile layout */}
                <div className='collectionPhoneText weddingCollectionLeftText paddingText'>
                    <h3 className='collectionPhoneTitle silverPhoneTitle silverTitle'>SILVER</h3>
                    <br />
                    <p className='collectionPhonePrice silverPhonePrice'>Price: $1100</p>
                    <br />
                    <ul className='collectionPhoneList'>
                        <li className='collectionPhoneListItem weddingListItem'>6 hours of wedding day coverage</li>
                        <li className='collectionPhoneListItem weddingListItem'>1.5 hour engagement, bridal, or formal session</li>
                        <li className='collectionPhoneListItem weddingListItem'>Editing &#38; online delivery of all images</li>
                        <li className='collectionPhoneListItem weddingListItem'>Flashdrive of all images</li>
                    </ul>
                    <NavLink exact to="/Contact">
                        <button className='collectionPhoneInquire weddingLeftInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                    </NavLink>
                </div>
                {/* End of dynamic mobile HTML */}
            </div>

            {/* Bronze */}
            <div className='serviceWrapper bronzeServiceWrapper packageWrapper flex-row'>
                <div className='collectionWrapper'>
                    <img className='collectionImg' alt='Wedding Picture' src={require('../../assets/weddingImages/pic3.JPG')}></img>
                </div>
                <div className='collectionText  paddingText'>
                    <div className='bronzeTitleWrapper'><h3 className='collectionTitle bronzeTitle'>BRONZE</h3></div>

                    <p className='collectionPrice'>Price: $900</p>
                    <ul className='collectionList'>
                        <li className='collectionListItem weddingListItem'>4 hours of wedding day coverage with a second shooter</li>
                        <li className='collectionListItem weddingListItem'> 1 hour engagement, bridal, or formal session</li>
                        <li className='collectionListItem weddingListItem'>Editing & online delivery of all images</li>
                        <li className='collectionListItem weddingListItem'>Flashdrive of all images</li>
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
                            small={require(`../../assets/weddingImages/pic4.JPG`)}
                            large={require(`../../assets/weddingImages/pic4.JPG`)}
                            className='galleryImg'
                            alt='Wedding Details'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/weddingImages/pic5.JPG`)}
                            large={require(`../../assets/weddingImages/pic5.JPG`)}
                            className='galleryImg'
                            alt='Wedding Details'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/weddingImages/pic6.JPG`)}
                            large={require(`../../assets/weddingImages/pic6.JPG`)}
                            className='galleryImg'
                            alt='Wedding Details'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/weddingImages/pic7.JPG`)}
                            large={require(`../../assets/weddingImages/pic7.JPG`)}
                            className='galleryImg'
                            alt='Wedding Details'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
