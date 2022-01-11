import React from 'react'
import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'


export default function Gallery() {
    return (
        <section className='portfolioWrapper'>
            <h2>MEDIA GALLERY</h2>
            <div className="flex-row  cardContainer">
                {images.map((image) => (
                    <Image 
                        imgAlt={image.imgAlt}
                        imgLinkName={image.imgLinkName}
                    />
                ))}
            </div>
        </section>
    )
}
