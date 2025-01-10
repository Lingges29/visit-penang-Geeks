import React, { useState } from "react";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <nav style={styles.nav}>
      <a href="#tourist-spots" style={styles.navLink}>Tourist Spots</a>
      <a href="#hotels" style={styles.navLink}>Hotels</a>
      <a href="#foods" style={styles.navLink}>Foods</a>
      <a href="#restaurant" style={styles.navLink}>Restaurant</a>
      <a href="#flight-booking" style={styles.navLink}>Flight Booking</a>

      {/* Dropdown for Highlights */}
      <div
        style={styles.dropdownContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href="#highlights" style={styles.navLink}>
          Highlights
        </a>
        {showDropdown && (
          <ul style={styles.dropdown}>
            <li>
              <a href="#corporate" style={styles.dropdownLink}>
                Corporate
              </a>
            </li>
            <li>
              <a href="#tickets" style={styles.dropdownLink}>
                Tickets
              </a>
            </li>
            <li>
              <a href="#gallery" style={styles.dropdownLink}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#calendar" style={styles.dropdownLink}>
                Calendar
              </a>
            </li>
            <li>
              <a href="#direction" style={styles.dropdownLink}>
                Direction
              </a>
            </li>
            <li>
              <a href="#faq" style={styles.dropdownLink}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#pdpa" style={styles.dropdownLink}>
                PDPA
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#0066cc",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  navLink: {
    color: "white",
    margin: "0 1rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#ffffff",
    listStyleType: "none",
    padding: "0.5rem 0",
    margin: "0",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 100,
  },
  dropdownLink: {
    color: "#0066cc",
    textDecoration: "none",
    display: "block",
    padding: "0.5rem 1rem",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  },
};

export default Nav;