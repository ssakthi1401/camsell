import React from 'react';
import './FooterPage.css'; // Ensure you have the updated CSS

const FooterPage = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p>1234 Street Name, City, Country</p>
          <p>Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
