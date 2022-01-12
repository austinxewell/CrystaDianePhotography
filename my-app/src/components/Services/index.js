import React from 'react'
import './services.css'

export default function Services() {
    return (
        <div className='serviceWrapper'>
            <div className='h2Wrapper'>
            <h2>SERVICES</h2>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>ENGAGEMENTS</h4>
                    <p className='servicePrice'>$120</p>
                    <ul className='serviceList'>
                        <li>45-60 Minutes</li>
                        <li>30+ Edited Photos</li>
                        <li>Outdoor/Natural Light</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/engagements.jpg')} alt='Engagements Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>SENIORS</h4>
                    <p className='servicePrice'>$100</p>
                    <ul className='serviceList'>
                        <li>45-60 Minutes</li>
                        <li>15+ Edited Photos</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/seniors.jpg')} alt='Seniors Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>WEDDINGS</h4>
                    <p className='servicePrice'>$900</p>
                    <ul className='serviceList'>
                        Could include:
                        <li>Proposal</li>
                        <li>Engagements</li>
                        <li>First Look</li>
                        <li>Bachelor/Bachelorette Parties</li>
                        <li>Wedding Ceremony</li>
                        <li>Reception</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/weddings.jpg')} alt='Wedding Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>MATERNITY</h4>
                    <p className='servicePrice'>$120</p>
                    <ul className='serviceList'>
                        <li>45-60 Minutes</li>
                        <li>20+ Edited Photos</li>
                        <li>Outdoor/Natural Light</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/maternity.jpg')} alt='Maternity  Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>FAMILY&#60;10</h4>
                    <p className='servicePrice'>$100</p>
                    <ul className='serviceList'>
                        <li>45-60 Minutes</li>
                        <li>30+ Edited Photos</li>
                        <li>Outdoor/Natural Light</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/Family10.jpg')} alt='Family < 10 Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>FAMILY&#62;11</h4>
                    <p className='servicePrice'>$180</p>
                    <ul className='serviceList'>
                        <li>45-60 Minutes</li>
                        <li>30+ Edited Photos</li>
                        <li>Outdoor/Natural Light</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/extendedfamily11.jpg')} alt='Extended Family Image'></img>
            </div>
            <div className='serviceCardWrapper'>
                <div className='serviceDetails'>
                    <h4>INDIVIDUAL/<br/>HEADSHOTS</h4>
                    <p className='servicePrice'>$120</p>
                    <ul className='serviceList'>
                        <li>30-45 Minutes</li>
                        <li>15+ Edited Photos</li>
                        <li>Outdoor/Natural Light</li>
                    </ul>
                </div>
                <img className='serviceImg' src={require('../../assets/serviceImages/individual-headshots.jpg')} alt='Individual/Headshot Image'></img>
            </div>
        </div>
    )
}
