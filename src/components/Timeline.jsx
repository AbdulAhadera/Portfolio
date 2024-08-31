import React, { useEffect } from 'react';
import anime from 'animejs';
import '../StyleSheets/Timeline.css'; // Make sure you have the necessary styles

const ScrollAnimation = () => {
  useEffect(() => {
    // Initialize the animation but don't autoplay
    const scrollAnimation = anime({
      targets: '.box',
      translateX: 180,
      duration: 5000, // 2000ms (2 seconds) duration
      easing: 'easeInOutQuad',
      autoplay: false // Disable autoplay
    });

    // Add a scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalScrollableHeight = document.body.scrollHeight - viewportHeight;

      // Calculate the scroll percentage (0 to 1)
      const scrollPercentage = scrollPosition / totalScrollableHeight;

      // Seek the animation based on the scroll position
      scrollAnimation.seek(scrollPercentage * scrollAnimation.duration);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure this runs only once when the component mounts


  return (
    <div className="scroll-container">
      <div className="box">Scroll Me</div>
    </div>
  );
};

export default ScrollAnimation;
