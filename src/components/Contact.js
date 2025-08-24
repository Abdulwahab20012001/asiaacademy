import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebook,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon
import "./faculty.css";

const ContactDetails = () => {
  return (
    <>
      <div className="about-header">
        <h1>Contact Details</h1>
      </div>

      <div className="contact-details-container">
        <ul className="contact-list">

          {/* Phone */}
          <li>
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-info">
              <strong>Phone</strong>
              <a href="tel:+92344555701">+92 344 555701</a> <br />
              <a href="tel:+92319980906">+92 319 980906</a>
            </div>
          </li>

          {/* Email */}
          <li>
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <strong>Email</strong>
              <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadsheheryar26@gmail.com" 
  target="_blank" 
  rel="noreferrer"
>
  muhammadsheheryar26@gmail.com
</a>
              
            </div>
          </li>

          {/* Address */}
          <li>
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info">
              <strong>Address</strong>
              <a
                href="https://maps.app.goo.gl/4B8QSoSMGtSCGuJB7"
                target="_blank"
                rel="noreferrer"
              >
                Shop 1-151, Committee Chowk, Iqbal Rd, Mohalla Chitian Hatian, Committe Chowk, Rawalpindi, 46000, Pakistan
              </a>
            </div>
          </li>

          {/* WhatsApp */}
          <li>
            <div className="contact-icon">
              <FaWhatsapp />
            </div>
            <div className="contact-info">
              <strong>WhatsApp</strong>
              <a
                href="https://wa.me/923344555701"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </li>

          {/* Facebook */}
          <li>
            <div className="contact-icon">
              <FaFacebook />
            </div>
            <div className="contact-info">
              <strong>Follow us</strong>
             
              <a
              
                href="https://www.facebook.com/share/1G7SrQfNRV/"
                target="_blank"
                rel="noreferrer"
              >
                Asia-academy
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactDetails;
