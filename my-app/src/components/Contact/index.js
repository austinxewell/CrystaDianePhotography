import React, { isValidElement, useState } from 'react';
import { validateEmail, validatePhoneNumber } from '../utils/helpers';
import axios from 'axios';
import './contact.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', address: '', subject: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    var { name, email, phone, address, subject, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            email = e.target.value
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else if (e.target.name === 'phone') {
            const isValid = validatePhoneNumber(e.target.value);
            phone = e.target.value
            if(!isValid) {
                setErrorMessage('Your phone number is invalid!');
            }else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (e.target.name === 'name') {
            name = e.target.value
        }
        if (e.target.name === 'message') {
            message = e.target.value
        }
    };

    const formId = 'H1PvHOWb';
    const formSparkUrl = `https://submit-form.com/${formId}`

    const submitForm = async (event) => {
        event.preventDefault();
        await postSubmission();
        alert("Your Message has been sent!");
        window.location.reload()
    };

    const postSubmission = async () => {
        const payload = {
            ...{ 'name': name, 'email': email, 'phone': phone, 'address': address, 'subject': subject, 'message': message },
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
        } catch (err) {
            console.log(err)
        }
    };

    //not catching the address or subject in formspark.

    return (
        <section className='contactCard'>
            <div className='contact-infoWrapper'>
                <h2>CONTACT INFO</h2>
                <p className='contact-info'>
                    West Jordan, UT 84088, USA
                    <br />
                    <a href='mailto:crystadianephotography@gmail.com'>crystadianephotography@gmail.com</a>
                    <br />
                    801-800-0771
                    <br />
                    <a href='https://www.facebook.com/crystadianephotography' target='_blank'><FaFacebookF size='20px' /></a>
                    <a href='https://www.instagram.com/crystadianephotography/' target='_blank'><FaInstagram size='20px' /></a>

                </p>
            </div>
            <fieldset>
            {errorMessage && (
                        <div>
                            <p className="errorText">{errorMessage}</p>
                        </div>
                    )}
                <form className="contactForm" id="contact-form" onSubmit={submitForm}>
                        <div className='name-emailWrapper'>
                            <label htmlFor="name"></label>
                            <input className='halfInput' type="text" name="name" defaultValue={name} onInput={handleChange} placeholder='Name:' />
                            <label htmlFor="email"></label>
                            <input className='halfInput' type="email" name="email" defaultValue={email} onInput={handleChange} placeholder='Email:' />
                        </div>
                        <div className='phone-addressWrapper'>
                            <label htmlFor="phone"></label>
                            <input className='halfInput' type="tel" name="phone" defaultValue={phone} onInput={handleChange} placeholder='Phone: Number' />
                            <label htmlFor="address"></label>
                            <input className='halfInput' type="text" name="address" defaultValue={address} onInput={handleChange} placeholder='Address:' />
                        </div>
                    <div className='subjectWrapper'>
                        <label htmlFor="subject"></label>
                        <input className='fullInput' type="text" name="subject" defaultValue={subject} onInput={handleChange} placeholder='Subject:' />
                    </div>
                    <div className='messageWrapper'>
                        <label htmlFor="message"></label><br />
                        <textarea className="messageText" name="message" rows="5" defaultValue={message} onInput={handleChange} placeholder='Type your message here...' />
                    </div>
                    <button className='submitButton' type="submit">Submit</button>
                </form>
            </fieldset>
        </section>
    )
}
