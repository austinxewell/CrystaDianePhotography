import React from 'react'
import Item from '../Item';

export default Image = (props) => {
    const {
        imgAlt,
        imgLinkName,
        openModal,
        modalInfo
    } = props;

    function setState() {
        openModal(true);
        modalInfo([imgAlt, imgLinkName])
    }

    return (
            <div className="imageCard"
                onClick={() => setState()}>
                <img className='galleryImg' src={require(`../../assets/galleryImages/${imgLinkName}.jpg`)} alt={`${imgAlt}`}></img>
            </div>
    )
}