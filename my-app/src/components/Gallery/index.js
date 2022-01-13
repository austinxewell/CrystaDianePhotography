import React, { useState } from 'react'
import Carousel from "react-elastic-carousel"
import Item from '../../pages/Item'
import './gallery.css'

import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'
import Modal from '../../pages/Modal'


export default function Gallery() {
    const [modalInfo, setModalInfo] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [isActive, setIsActive] = useState(false)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2 },
        { width: 950, itemsToShow: 3 },
        { width: 1250, itemsToShow: 4 },
    ]

    return (
        <section className='galleryWrapper'>
            {openModal && <Modal closeModal={setOpenModal} modalInfo={modalInfo} isActive={isActive} />}
            <div className='h2Wrapper'>
                <h2>MEDIA GALLERY</h2>
            </div>
            <div className='card-container'>
                <a className="flex-row">
                    <>
                        <Carousel className={isActive ? 'modalCarouselActive': null } breakPoints={breakPoints}>                   
                            {images.map((image) => (
                                <Image
                                    imgAlt={image.imgAlt}
                                    imgLinkName={image.imgLinkName}
                                    openModal={setOpenModal}
                                    modalInfo={setModalInfo}
                                />
                            ))}
                        </Carousel>
                    </>
                </a>
            </div>
        </section>
    )
}
