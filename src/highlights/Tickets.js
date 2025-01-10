import React, { useEffect, useState } from 'react';

const Tickets = () => {
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
      const element = document.getElementById('tickets');
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
        id="tickets"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Tickets</h2>
        <p>
          Discover Penang's top attractions and events with ease! From cultural festivals to scenic attractions, 
          book your tickets directly with us and enjoy exclusive discounts. Explore the historic streets of George Town, 
          visit the Penang Hill Railway, or attend a local art festival.
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/tickets', '_blank', 'noopener,noreferrer')}
        >
          Book Tickets
        </div>
      </div>
    </section>
  );
};

export default Tickets;