import React from 'react';
import './Footer.css';
import visaIcon from "../../assets/icons/visa.png";
import masterCardIcon from "../../assets/icons/mastercard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

var currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/store-location">Store Location</a></li>
            <li><a href="/terms-of-service">Terms Of Service</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>POLICIES</h4>
          <ul>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/return-exchange">Return & Exchange</a></li>
            <li><a href="/cancellation-policy">Cancellation Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CUSTOMER SERVICE</h4>
          <ul>
            <li><a href="/track-order">Track Your Order</a></li>
            <li><a href="/faq">FAQ's</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>BLOGS</h4>
          <ul>
            <li><a href="/blogs">Blogs & News</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Can we help you?</h4>
          <p>Call us: +92 311 1100439</p>
          <p>Timings: Monday to Saturday</p>
          <p>10:00 AM to 05:00 PM</p>
          <p>Email: support@breakout.com.pk</p>
        </div>
        <div className="footer-section newsletter-wrapper">
          <h4>NEWSLETTER SIGN UP</h4>
          <p>Sign up for exclusive updates, new arrivals & insider only discounts</p>
          <div className="newsletter">
            <input type="email" placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="social-media">
            <span><FontAwesomeIcon icon={faFacebookF} /></span>
            <span><FontAwesomeIcon icon={faInstagram} /></span>
            <span><FontAwesomeIcon icon={faYoutube} /></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Breakout All Rights Reserved.</p>
        <div className="payment-methods">
          <img src={visaIcon} alt="visa" />
          <img src={masterCardIcon} alt="mastercard" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
