import React, { useState } from 'react'
import Carousel from "react-elastic-carousel"
import './gallery.css'
import Image from '../../pages/Images'
import images from '../../pages/Images/images.json'


export default function Gallery() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2 },
        { width: 950, itemsToShow: 3 },
        { width: 1250, itemsToShow: 4 },
    ]

    return (
        <section className='galleryWrapper'>
            <div className='h2Wrapper'>
                <h2>MEDIA GALLERY</h2>
            </div>
            <div className='card-container'>
                <a className="flex-row">
                    <>
                        <Carousel breakPoints={breakPoints}>                   
                            {images.map((image) => (
                                <Image
                                    imgAlt={image.imgAlt}
                                    imgLinkName={image.imgLinkName}
                                />
                            ))}
                        </Carousel>
                    </>
                </a>
            </div>
        </section>
    )
}
