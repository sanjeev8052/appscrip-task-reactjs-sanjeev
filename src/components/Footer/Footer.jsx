import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>sign up for metta muse</p>
          <div className="footer-form">
            <input type="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-top-right">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <h2>metta muse</h2>
          <p>about</p>
          <p>stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-bottom-mid">
          <h2>QUICK LINKS</h2>
          <p>Order & Shopping</p>
          <p>Join?Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
        </div>
        <div className="footer-bottom-right">
          <h2>FOLLOW US</h2>
          <p>Linkdin</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
