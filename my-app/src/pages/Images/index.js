import React from 'react'

export default Image = (props) => {
    const {
        imgAlt,
        imgLinkName
    } = props;

    return (
        <div className="imageCard">
            <img src={require(`../../assets/galleryImages/${imgLinkName}.jpg`)} alt={`${imgAlt}`}></img>
        </div>
    )
}