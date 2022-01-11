import React from 'react'

export default function Modal({ closeModal, imgAlt, imgLinkName }) {
    console.log(imgAlt, imgLinkName)
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => closeModal(false)}>X</button>
                <div className='title'>
                    <h1>{imgAlt}</h1>
                </div>
                <div className='body'>
                <img src={require(`../../assets/galleryImages/${imgLinkName}.jpg`)} alt={`${imgAlt}`}></img>
                </div>
            </div>            
        </div>
    )
}
