import React, {useState} from 'react'
import './gallery.css'

import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'
import Modal from '../../pages/Modal'


export default function Gallery() {
    const [modalInfo, setModalInfo] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className='galleryWrapper'>
            {openModal && <Modal closeModal={setOpenModal} modalInfo={modalInfo}/>}
            <h2>MEDIA GALLERY</h2>
            <a
            className="flex-row cardContainer">
                {images.map((image) => (
                    <Image 
                        imgAlt={image.imgAlt}
                        imgLinkName={image.imgLinkName}
                        openModal={setOpenModal}
                        modalInfo={setModalInfo}
                    />
                    ))}
            </a>
        </section>
    )
}
