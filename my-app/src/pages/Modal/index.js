import React from 'react'
import './modal.css'

export default function Modal({ closeModal, modalInfo, isActive }) {
    const imgName = modalInfo[0];
    const imgLink = modalInfo[1]

    function setState() {
        closeModal(false);
        isActive(true)
    }

    return (
        <div className='modalBackground'>
            <div className=''>
                <button className='exitImgBtn' onClick={() => setState()}>Close Enlarged Image</button>
                <div className='title'>
                </div>
                <div className='body'>
                <img className='modalImage' src={require(`../../assets/galleryImages/${imgLink}.jpg`)} alt={`${imgName}`}></img>
                </div>
            </div>            
        </div>
    )
}
