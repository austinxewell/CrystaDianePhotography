import React, {useState} from 'react'
import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'
import Modal from '../../pages/Modal'


export default function Gallery() {
    const [image, setCurrentImage] = useState()
    const [openModal, setOpenModal] = useState(false);


    return (
        <section className='portfolioWrapper'>
            {openModal && <Modal closeModal={setOpenModal} />}
            <h2>MEDIA GALLERY</h2>
            <a
            className="flex-row  cardContainer"
            onClick={() => {setOpenModal(true)}}>
                {images.map((image) => (
                    <Image 
                        imgAlt={image.imgAlt}
                        imgLinkName={image.imgLinkName}
                    />
                    ))}
            </a>
        </section>
    )
}
