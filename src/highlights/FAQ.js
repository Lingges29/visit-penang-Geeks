import React, { useEffect, useState } from 'react';

const FAQ = () => {
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
      const element = document.getElementById('faq');
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
        id="faq"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>FAQ</h2>
        <p>
          Have questions about visiting Penang? Check out our frequently asked questions section for tips, 
          travel guidelines, and answers to common queries about accommodation, transportation, and attractions.
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/faq', '_blank', 'noopener,noreferrer')}
        >
          View FAQ
        </div>
      </div>
    </section>
  );
};

export default FAQ;