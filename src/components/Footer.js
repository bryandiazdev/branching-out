// components/Footer.js
import React from 'react';
import '../pages/styles/Home.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>123 Tree Street, Cityville, USA</p>
            <p>Phone: xxx-xxx-xxxx</p>
            <p>Email: info@branchingouttreesolutions.com</p>
          </div>
          <div className="col-md-6">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
