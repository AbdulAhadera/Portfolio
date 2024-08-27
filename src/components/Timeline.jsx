import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../StyleSheets/Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top top",   // Start when the top of the container hits the top of the viewport
        end: "bottom bottom", // End when the bottom of the container hits the bottom of the viewport
        scrub: true,        // Smoothly animate in sync with the scroll position
        pin: true,          // Pin the container in place during scroll
        markers: false,     // Set to true to see markers for debugging
      }
    });

    // Define keyframes for the ball's movement
    timeline
      .to(".ball", { x: '10vw' }, 0)        // Move to 10% of the viewport width
      .to(".ball", { x: '35vw' }, 0.25)     // Move to 35% of the viewport width
      .to(".ball", { x: '65vw' }, 0.65)     // Move to 65% of the viewport width
      .to(".ball", { x: '90vw' }, 1);       // Move to 90% of the viewport width

  }, []); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className="timeline-container">
      <div className="timeline"></div>
      <div className="ball"></div>
    </div>
  );
};

export default Timeline;
