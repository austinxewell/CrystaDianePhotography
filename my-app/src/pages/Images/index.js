import React from 'react'
import ModalImage from 'react-modal-image'

export default Image = (props) => {
    const {
        imgAlt,
        imgLinkName,
        modalInfo
    } = props;

    return (
            <div className="imageCard"
                onClick={() => modalInfo([imgAlt, imgLinkName])}>
                    <ModalImage 
                        small={require(`../../assets/galleryImages/${imgLinkName}.jpg`)}
                        large={require(`../../assets/galleryImages/${imgLinkName}.jpg`)}
                        className='galleryImg'
                        alt={`${imgAlt}`}
                    />
            </div>
    )
}