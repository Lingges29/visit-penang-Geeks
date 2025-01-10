import React, { useEffect, useState } from 'react';

const Corporate = () => {
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
      const element = document.getElementById('corporate');
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
        id="corporate"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Corporate</h2>
        <p>
          Visit Penang is dedicated to promoting the beautiful island of Penang as a prime destination for tourism, 
          business, and leisure. Our corporate initiatives include fostering partnerships with local businesses, 
          maintaining high standards in tourism services, and ensuring sustainable tourism growth.
        </p>
        <div
          className="click-box"
          onClick={() => window.location.href = 'mailto:corporate@visitpenang.com'}
        >
          Contact Us
        </div>
      </div>
    </section>
  );
};

export default Corporate;