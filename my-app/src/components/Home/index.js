import React, { useState } from 'react'
import './home.css'
import References from '../../pages/References'
import references from '../../pages/References/references.json'
import Carousel from 'react-elastic-carousel'



import Image from '../../pages/Images'
import images from '../../pages/HomeCarousel/images.json'

export default function Home() {
    const [activeReference, setActiveReference] = useState(-1)
    const [reference, setCurrentReference] = useState({
        fullName: "I'm Crysta Diane",
        referenceText: 'Reviews not only mean the world to me as a creative, but also can have a large impact on small businesses. A positive, honest review can make or break a potential decision for a prospective client. As a thank you for contributing to my small business by leaving a review, you will receive an automatic 20% discount on a future session (Weddings excluded). You can leave a review on social media, Google, or send me an email!',
        referenceImgLink: 'pic6',
        referenceImgAlt: 'Crysta Diane Photo'
    })

    const resetCrystaReference = () => {
        setActiveReference(-1);
        setCurrentReference({
            fullName: "I'm Crysta Diane",
            referenceText: 'Reviews not only mean the world to me as a creative, but also can have a large impact on small businesses. A positive, honest review can make or break a potential decision for a prospective client. As a thank you for contributing to my small business by leaving a review, you will receive an automatic 20% discount on a future session (Weddings excluded). You can leave a review on social media, Google, or send me an email!',
            referenceImgLink: 'pic6',
            referenceImgAlt: 'Crysta Diane Photo'
        })
    }

    const handleOnClick = index => {
        setActiveReference(index)
    }

    return (
        <div className='homeWrapper'>
            <section className='header-image-wrapper'>
                <Carousel
                    className='home-carousel'
                    enableAutoPlay={true}
                    autoPlaySpeed={5000}
                    enableSwipe={false}
                    showArrows={false}
                    disableArrowsOnEnd={true}
                >
                    {images.map((image) => (
                        <img
                            src={require(`../../assets/${image.imgLinkName}.JPG`)}
                            alt={image.imgAlt}
                            className='header-image'>
                        </img>
                    ))}
                </Carousel>
            </section>
            <div>
                <img
                    src={require('../../assets/backgroundImages/pic4.JPG')}
                    className='home-background-image'
                ></img>
                <div className='text-wrapper'>
                    <p>Hi! I’m Crysta! <br />I enjoy traveling, thrifting and good music. I am so happy that you are here & cannot wait to get to know you!</p>
                </div>
                <div className='text-wrapper-phone'>
                    <p>Hi! I’m Crysta! <br />I enjoy traveling, thrifting and good music. I am so happy that you are here & cannot wait to get to know you!</p>
                </div>
            </div>
            <container className='referenceWrapper'>
                <h3 className='reviewsTitle'>•REVIEWS•</h3>
                <div className='referenceCardWrapper'>
                    <ul className='references'>
                        <p className='referenceName reset-crysta' onClick={() => resetCrystaReference()}>Crysta</p>
                        {references.map((reference, index) => (
                            <li
                                onClick={() => handleOnClick(index)}
                                className={activeReference === index ? 'referenceNameActive' : 'referenceName'}>
                                <a onClick={() => setCurrentReference(reference)}>
                                    {reference.referenceName}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <References reference={reference} />
                </div>
                <div className='referenceTextWrapper'>
            </div>
            </container>
        </div>
    )
}
