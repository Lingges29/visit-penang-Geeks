import React, { useEffect, useState } from 'react';

const Direction = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the element is in the viewport
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // useEffect hook to handle scroll event and visibility
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('direction');
      if (element && isInViewport(element)) {
        setIsVisible(true);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="calendar-section">
      <div
        id="direction"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Direction</h2>
        <p>
          Getting to Penang is easy! Whether you're traveling by air, land, or sea, Penang offers a wide range of 
          transportation options. Penang International Airport connects the island to major cities worldwide, while 
          the Penang Bridge and ferry services provide convenient access by road and sea.
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/directions', '_blank', 'noopener,noreferrer')}
        >
          Get Directions
        </div>
      </div>
    </section>
  );
};

export default Direction;