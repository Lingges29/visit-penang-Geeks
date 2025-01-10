import React, { useEffect, useState } from 'react';

const Gallery = () => {
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
      const element = document.getElementById('gallery');
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
        id="gallery"
        className={`calendar-container fade-in ${isVisible ? 'visible' : ''}`}
      >
        <h2>Gallery</h2>
        <p>
          Explore the vibrant beauty of Penang through our exclusive photo and video gallery. From stunning beaches to 
          captivating cultural landmarks, our gallery captures the essence of Penang. Get inspired and plan your next visit!
        </p>
        <div
          className="click-box"
          onClick={() => window.open('https://visitpenang.com/gallery', '_blank', 'noopener,noreferrer')}
        >
          View Gallery
        </div>
      </div>
    </section>
  );
};

export default Gallery;