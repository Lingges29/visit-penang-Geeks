import React, { useEffect, useState } from 'react';

const PDPA = () => {
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
      const element = document.getElementById('pdpa');
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
        id="pdpa"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Personal Data Protection Notice (PDPA)</h2>
        <p>
          Your privacy is important to us. At Visit Penang, we are committed to safeguarding your personal data in compliance 
          with the Personal Data Protection Act (PDPA). Learn how we manage your data and protect your privacy.
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/pdpa', '_blank', 'noopener,noreferrer')}
        >
          Read PDPA Notice
        </div>
      </div>
    </section>
  );
};

export default PDPA;