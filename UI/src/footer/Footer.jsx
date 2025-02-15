import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send the email to a server)
    console.log("Submitted email: ", email);
  };

  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i class="fa-solid fa-envelope"></i> <a href="mailto:info@bulkbytes.org">info@bulkbytes.org</a></p>
          <p><i class="fa-solid fa-phone"></i> <a href="tel:+92314-6572538">+92314-6572538</a></p>
          <p><i class="fa-solid fa-location-dot"></i> House # 9-B IQ villas ,Nothern Bypass Bosan Road Multan</p>
          
         
        </div>
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61557143516381"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/bbofficial62/"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
           {/* Email Input Section */}
           <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ color: "white", marginTop: "10px" }}>Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder="Your email address"
              style={{
                padding: "10px",
                marginTop: "5px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#00defb",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
  <p>© 2025 <span className="company-name">BulkBytes</span>. All rights reserved.</p>
  <p><a href="/career" className="career-link">Careers</a></p> {/* Added Career link */}
</div>
    </footer>
  );
};

export default Footer;