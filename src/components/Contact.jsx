import React, { useState } from 'react';
import gmail from '../Images/gmail.png';
import phone from '../Images/phone.png';
import Instagram from '../Images/Instagram.png';
import Facebook from '../Images/Facebook.png';
import Whatsapp from '../Images/whatsapp.png';

export default function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        alert(data.message);
    }

    return (
        <div className={`contact`} id="contacts">
            <h1><b>Contact Me</b></h1>
            <p>Feel free to reach out to me for any inquiries, collaborations, or just to say hello!</p>
            <div className="contact-info">
                <p><b>Gmail</b> <a href="mailto:ankit786v@gmail.com"><img src={gmail} alt="Gmail" /></a></p>
                <p><b>Phone</b> <a href="tel:+919179041718"><img src={phone} alt="Phone" /></a></p>
                <p><b>Instagram</b> <a href="https://www.instagram.com/hii_ankit_here"><img src={Instagram} alt="Instagram" /></a></p>
                <p><b>Facebook</b> <a href="https://www.facebook.com/profile.php?id=100006183586426"><img src={Facebook} alt="Facebook" /></a></p>
                <p><b>Whatsapp</b> <a href="https://wa.me/919179041718"><img src={Whatsapp} alt="Whatsapp" /></a></p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <h1><b>Send a Message</b></h1>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <textarea name="message" placeholder="Message" onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}