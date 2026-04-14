import logo from '../Images/logo.png';
import gmail from '../Images/gmail.png';
import phone from '../Images/phone.png';
import Instagram from '../Images/Instagram.png';
import Facebook from '../Images/Facebook.png';
import Whatsapp from '../Images/whatsapp.png';

export default function Footer() {
    return (
        <div className={`footer`} id='footer'>
            <img src={logo} alt="Logo" />
            <div className="contact-logo">
                <p><a href="mailto:ankit786v@gmail.com"><img src={gmail} alt="Gmail" /></a></p>
                <p><a href="tel:+919179041718"><img src={phone} alt="Phone" /></a></p>
                <p><a href="https://www.instagram.com/hii_ankit_here"><img src={Instagram} alt="Instagram" /></a></p>
                <p><a href="https://www.facebook.com/profile.php?id=100006183586426"><img src={Facebook} alt="Facebook" /></a></p>
                <p><a href="https://wa.me/919179041718"><img src={Whatsapp} alt="Whatsapp" /></a></p>
            </div>
            <div className="content">
                <p>&copy; 2026 Ankit Vishwakarma. All rights reserved.</p>
                <p>Built with ❤️ using React & Node.js</p>
                <p>Designed and developed by Ankit Vishwakarma.</p>
            </div>
        </div>
    );
}