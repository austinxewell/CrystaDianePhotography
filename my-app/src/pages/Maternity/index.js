import React from 'react'
import './maternity.css'
import ModalImage from 'react-modal-image'
import { NavLink } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Maternity() {
    return (
        <div className='maternityWrapper'>
            <h2>MATERNITY</h2>
            <div className='referenceCardWrapper maternityCardWrapper  packageWrapper'>
                <section className='referenceInfoWrapper flex-row weddingInfoWrapper'>
                    <img
                        className='referenceImg maternityImg'
                        src={require(`../../assets/maternityImages/pic2.JPG`)}
                        alt='pic1'
                    ></img>
                    <div className='maternityTextWrapper'>
                        <h3 className='weddingTitle'>INCLUDES</h3>
                        <p className='collectionPrice'>Price: $120</p>
                        <ul className='referenceText'>
                            <li>45-60 minutes</li>
                            <li>30+ edited photos</li>
                            <li>Online gallery with full print rights</li>
                            <li>Styling ideas</li>
                        </ul>
                        <NavLink exact to="/Contact">
                            <button className='collectionInquire maternityInquire'>INQUIRE NOW <FaLongArrowAltRight /></button>
                        </NavLink>
                    </div>
                </section>
            </div>
            <div className='card-container'>
                <a className='flex-row'>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/maternityImages/pic1.JPG`)}
                            large={require(`../../assets/maternityImages/pic1.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/maternityImages/pic3.JPG`)}
                            large={require(`../../assets/maternityImages/pic3.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                    <div className='imageCard'>
                        <ModalImage
                            small={require(`../../assets/maternityImages/pic4.JPG`)}
                            large={require(`../../assets/maternityImages/pic4.JPG`)}
                            className='galleryImg'
                            alt='pic1'
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
