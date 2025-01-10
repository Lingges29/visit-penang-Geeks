import React from "react";

// Define the styles object for Footer (optional, for basic styling)
const styles = {
  footer: {
    backgroundColor: '#002626', // Dark green background
    color: 'white',
    textAlign: 'left',
    padding: '2rem 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  section: {
    flex: '1 1 calc(25% - 2rem)', // Flexible width for sections
    minWidth: '200px',
    marginBottom: '1rem',
  },
  logo: {
    maxWidth: '100px',
    marginBottom: '1rem',
  },
  qrCode: {
    maxWidth: '100px',
    marginTop: '1rem',
  },
  links: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    display: 'block',
  },
  socialIcons: {
    display: 'flex',
    gap: '0.5rem',
  },
  socialIcon: {
    color: 'white',
    fontSize: '1.5rem',
    textDecoration: 'none',
  },
};

const Footer = () => (
  <footer style={styles.footer}>
    {/* Left section */}
    <div style={styles.section}>
      <img src="\logo_of_visit_penang-removebg.png" alt="Visit Penang logo" style={styles.logo} />
      <p>Experience The Pearl</p>
      <p>of the Orient</p>
      <img src="\My_Gallery.png" alt="QR Code" style={styles.qrCode} />
    </div>

    {/* Highlights section */}
    <div style={styles.section}>
      <h4>Quicklinks</h4>
      <ul style={styles.links}>
        <li><a href="#tourist-spots" style={styles.link}>Tourist spots</a></li>
        <li><a href="#foods" style={styles.link}>Foods</a></li>
        <li><a href="#restaurants" style={styles.link}>Restaurant</a></li>
        <li><a href="#hotels" style={styles.link}>Hotel</a></li>
        <li><a href="#flights" style={styles.link}>Flight Booking</a></li>
      </ul>
    </div>

    {/* Quicklinks section */}
    <div style={styles.section}>
      <h4>Highlights</h4>
      <ul style={styles.links}>
        <li><a href="#corporate" style={styles.link}>Corporate</a></li>
        <li><a href="#tickets" style={styles.link}>Tickets</a></li>
        <li><a href="#gallery" style={styles.link}>Gallery</a></li>
        <li><a href="#calendar" style={styles.link}>Calendar</a></li>
        <li><a href="#direction" style={styles.link}>Direction</a></li>
        <li><a href="#faq" style={styles.link}>FAQ</a></li>
        <li><a href="#pdpa" style={styles.link}>Personal Data Protection Notice (PDPA)</a></li>
      </ul>
    </div>

    {/* Contact section */}
    <div style={styles.section}>
      <h4>Get in touch with us</h4>
      <p>Contact Us</p>
      <p>Email Us: <a href="mailto:inquiries@visitpenang.com" style={styles.link}>inquiries@visitpenang.com</a></p>
      <div style={styles.socialIcons}>
      <a href="https://www.facebook.com" style={styles.socialIcon}><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com" style={styles.socialIcon}><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com" style={styles.socialIcon}><i className="fab fa-twitter"></i></a>
        <a href="https://www.flickr.com" style={styles.socialIcon}><i className="fab fa-flickr"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;

