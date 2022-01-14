import React, { useState } from 'react'
import './home.css'
import References from '../../pages/References'
import references from '../../pages/References/references.json'

export default function Home() {
    const [reference, setCurrentReference] = useState({
        fullName: 'Crysta Diane',
        referenceText: 'Hi!, My name is Crysta Diane. Here is some quick information about me and the importance of references. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi tempus. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.',
        referenceImgLink: 'pic4',
        referenceImgAlt: 'Crysta Diane Photo'
    })

    return (
        <div className='homeWrapper'>
            <h2 className='homeTitle'>HOME</h2>
            <container className='referenceWrapper'>
                <h3 className='reviewsTitle'>REVIEWS</h3>
                <div className='referenceCardWrapper'>
                    <ul className='references'>
                        {references.map((reference) => (
                            <li className='referenceName'><a onClick={() => setCurrentReference(reference)}>{reference.referenceName}</a></li>
                        ))}
                    </ul>
                    <References reference={reference}/>
                </div>
            </container>
        </div>
    )
}
