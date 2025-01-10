import React, { useEffect, useState } from 'react';

const Calendar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if element is in the viewport
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // useEffect to handle scroll event and visibility
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('calendar');
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
        id="calendar"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Calendar</h2>
        <p>
          Stay updated with the latest events happening in Penang! From food festivals to art exhibitions,
          there's always something exciting going on. Check out our calendar for upcoming events and plan your trip accordingly.
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/calendar', '_blank', 'noopener,noreferrer')}
        >
          Click Here
        </div>
      </div>
    </section>
  );
};

export default Calendar;