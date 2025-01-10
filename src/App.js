import React, { useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import TouristSpots from "./components/TouristSpots";
import Food from "./components/Food";
import Hotels from "./components/Hotels";
import FlightBooking from "./components/FlightBooking";
import Restaurant from "./components/Restaurant";

// Importing Highlights components
import Calendar from "./highlights/Calendar";
import Corporate from "./highlights/Corporate";
import Direction from "./highlights/Direction";
import FAQ from "./highlights/FAQ";
import Gallery from "./highlights/Gallery";
import PDPA from "./highlights/PDPA";
import Tickets from "./highlights/Tickets";

import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  useEffect(() => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeIns.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible"); // Optional for repeated animations
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        {/* Video Section */}
        <section id="intro-video" className="video-section">
          <video 
            autoPlay 
            loop 
            muted 
            className="intro-video" 
            poster="\penang malaysia.jpg"
          >
            <source src="\Best Things To Do in Penang Malaysia 2025 4K - Island Hopper TV (360p, h264, youtube).mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Other sections */}
        <section id="tourist-spots">
          <TouristSpots />
        </section>
        <section id="foods">
          <Food />
        </section>
        <section id="restaurant">
          <Restaurant />
        </section>
        <section id="hotels">
          <Hotels />
        </section>
        <section id="flight-booking">
          <FlightBooking />
        </section>

        {/* Highlights Section */}
        <section id="highlights">
          <h2 className="section-title">Highlights</h2>
          <div className="highlight-sections">
            <Corporate />
            <Tickets />
            <Gallery />
            <Calendar />
            <Direction />
            <FAQ />
            <PDPA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;