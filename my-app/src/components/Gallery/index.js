import React, { useState } from 'react'
import './gallery.css'

import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'
import Modal from '../../pages/Modal'


export default function Gallery() {
    const [modalInfo, setModalInfo] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className='galleryWrapper'>
            {openModal && <Modal closeModal={setOpenModal} modalInfo={modalInfo} />}
            <div className='h2Wrapper'>
            <h2>MEDIA GALLERY</h2>
            </div>
            <div className='card-container'>
                <a className="flex-row">
                    {images.map((image) => (
                        <Image
                            imgAlt={image.imgAlt}
                            imgLinkName={image.imgLinkName}
                            openModal={setOpenModal}
                            modalInfo={setModalInfo}
                        />
                    ))}
                </a>
            </div>
        </section>
    )
}
