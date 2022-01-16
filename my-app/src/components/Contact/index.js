import React, { isValidElement, useState } from 'react';
import { validateEmail, validatePhoneNumber } from '../utils/helpers';
import axios from 'axios';
import './contact.css'
import { FaClosedCaptioning, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Contact() {
    const [formState, setFormState] = useState({ fullName: '', email: '', phone: '', address: '', subject: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    var { fullName, email, phone, address, subject, message } = formState;

    const validator = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } 
            else {
                setErrorMessage('');
            }
        } else if (e.target.name === 'phone') {
            const isValid = validatePhoneNumber(e.target.value);
            if (!isValid) {
                setErrorMessage('Your phone number is invalid!');
            } 
            else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } 
            else {
                setErrorMessage('');
            }
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            fullName = e.target.value
            console.log('Name: ', fullName)
        }
        if (e.target.name === 'email') {
            email = e.target.value
            console.log('Name: ', email)
        }
        if (e.target.name === 'phone') {
            phone = e.target.value
            console.log('phone ', phone)
        }
        if (e.target.name === 'address') {
            address = e.target.value
            console.log('address: ', address)
        }
        if (e.target.name === 'subject') {
            subject = e.target.value
            console.log('subject: ', subject)
        }
        if (e.target.name === 'message') {
            message = e.target.value
            console.log('message: ', message)
        }
    };


    const formId = 'H1PvHOWb';
    const formSparkUrl = `https://submit-form.com/${formId}`

    const submitForm = async (event) => {
        console.log('fired')
        event.preventDefault();
        await postSubmission();
        alert(`
        Your Message:
        Hi Crysta, My name is ${fullName}.

        My contact information is 
            Email: ${email}
            Phone: ${phone}
            Address: ${address}

        Subject: ${subject}
        Message: ${message}
        `)
        window.location.reload()
    };

    const postSubmission = async () => {
        const payload = {
            ...{ 'name': fullName, 'email': email, 'phone': phone, 'address': address, 'subject': subject, 'message': message },
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <section className='contactCard'>
            <div className='contact-infoWrapper'>
                <h2>CONTACT INFO</h2>
                <p className='contact-info'>
                    West Jordan, UT 84088, USA
                    <br />
                    <a className='contactEmail' href='mailto:crystadianephotography@gmail.com'>crystadianephotography@gmail.com</a>
                    <br />
                    801-800-0771
                    <br />
                    <a className='contactIcon' href='https://www.facebook.com/crystadianephotography' target='_blank'><FaFacebookF size='20px' /></a>
                    <a className='contactIcon' href='https://www.instagram.com/crystadianephotography/' target='_blank'><FaInstagram size='20px' /></a>
                </p>
            </div>
            <fieldset className='contactWrapper'>
                {errorMessage && (
                    <div>
                        <p className="errorText">{errorMessage}</p>
                    </div>
                )}
                <form className="contactForm" id="contact-form" onSubmit={submitForm}>
                    <div className='name-emailWrapper'>
                        <label htmlFor="name"></label>
                        <input
                            className='halfInput halfToFullInput'
                            type="text"
                            name="name"
                            defaultValue={fullName}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Name:'
                        />
                        <label htmlFor="email"></label>
                        <input
                            className='halfInput halfToFullInput'
                            type="email"
                            name="email"
                            defaultValue={email}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Email:'
                        />
                    </div>
                    <div className='phone-addressWrapper'>
                        <label htmlFor="phone"></label>
                        <input
                            className='halfInput halfToFullInput'
                            type="tel"
                            name="phone"
                            defaultValue={phone}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Phone Number:'
                        />
                        <label htmlFor="address"></label>
                        <input
                            className='halfInput halfToFullInput'
                            type="text"
                            name="address"
                            defaultValue={address}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Address:'
                        />
                    </div>
                    <div className='subjectWrapper'>
                        <label htmlFor="subject"></label>
                        <input
                            className='fullInput halfToFullInput'
                            type="text"
                            name="subject"
                            defaultValue={subject}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Subject:'
                        />
                    </div>
                    <div className='messageWrapper'>
                        <label htmlFor="message"></label><br />
                        <textarea
                            className="messageText  halfToFullInput"
                            name="message" rows="5"
                            defaultValue={message}
                            onChange={handleChange}
                            onBlur={validator}
                            placeholder='Type your message here...'
                        />
                    </div>
                    <button className='submitButton' type="submit">Submit</button>
                </form>
            </fieldset>
        </section>
    )
}
