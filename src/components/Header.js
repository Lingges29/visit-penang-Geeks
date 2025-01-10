import React from "react";

// Define the styles object
const styles = {
  header: {
    backgroundColor: '#e55a00',  // Color for the header background
    color: 'rgb(255, 255, 255)', // Text color
    padding: '6rem',              // Padding inside the header
    textAlign: 'center',          // Center the text
  },
  logo: {
    maxWidth: '200px',            // Set the maximum width for the logo (adjust as needed)
    height: 'auto',               // Maintain aspect ratio
    marginBottom: '20px',         // Space between logo and text
  }
};

const Header = () => (
  <header style={styles.header}>
    {/* Logo Image */}
    <img src="\logo_of_visit_penang-removebg.png" alt="Penang Logo" style={styles.logo} />
    
    <h1>Welcome to Penang</h1>
    <p>Discover the beauty, culture, and flavours of Penang</p>
  </header>
);

export default Header;
