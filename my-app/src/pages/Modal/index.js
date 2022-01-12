import React from 'react'
import './modal.css'

export default function Modal({ closeModal, modalInfo }) {
    const imgName = modalInfo[0];
    const imgLink = modalInfo[1]

    return (
        <div className='modalBackground'>
            <div className=''>
                <button className='exitImgBtn' onClick={() => closeModal(false)}>Exit Image</button>
                <div className='title'>
                </div>
                <div className='body'>
                <img className='modalImage' src={require(`../../assets/galleryImages/${imgLink}.jpg`)} alt={`${imgName}`}></img>
                </div>
            </div>            
        </div>
    )
}
