import React from "react";
import { FaFacebook, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import './faculty.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left Side Text */}
        <div className="footer-text">
          <h2>ASIA ACADEMY</h2>
          <p className="description">
            Our institution aims at imparting quality education to students on
            modern and scientific lines, in an environment of mutual respect and
            dignity. We strive to groom them into good human beings, competent
            enough to handle the challenges of the future with confidence.
            Education must have strong roots in values, traditions, moral
            integrity, and cultural heritage.
          </p>
        </div>

        {/* Right Side Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhone /> <a href="tel:+92344555701">+92 344 555701</a></p>
          <p><FaEnvelope /> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadsheheryar26@gmail.com">muhammadsheheryar26@gmail.com</a></p>
          <p><FaWhatsapp /> <a href="https://wa.me/923344555701" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          <p><FaFacebook /> <a href="https://facebook.com/Asia-academy" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        © Copyright All Rights Reserved 2025
      </div>
    </footer>
  );
};

export default Footer;
