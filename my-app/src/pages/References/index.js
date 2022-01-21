import React from 'react'

export default function References({ reference }) {
    const fullName = reference.fullName
    const Text = reference.referenceText
    const imgLink = reference.referenceImgLink
    const imgAlt = reference.referenceImgAlt

    return (
        <section className='referenceInfoWrapper flex-row'>
            <div className='reference-phone-wrapper'>
                <img
                    className='referenceImg'
                    src={require(`../../assets/referenceImages/${imgLink}.JPG`)}
                    alt={imgAlt}
                ></img>
                <div className='referenceTextWrapper'>
                    <h4 className='referenceTitleName'>{fullName}</h4>
                    <p className='referenceText'>{Text}</p>
                </div>
                <div className='referencePhoneTextWrapper'>
                    <h4 className='referencePhoneTitleName'>{fullName}</h4>
                    <p className='referencePhoneText'>{Text}</p>
                </div>
            </div>
        </section>
    )
}
