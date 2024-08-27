import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version of tsParticles, includes the most commonly used features
import '../StyleSheets/Hero.css'

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load only the necessary particles engine
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log("Particles Loaded:", container);
    };

    return (
        <div className="bg">
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#1b1b1b", // Background color of the canvas
                            },
                        },
                        fpsLimit: 60, // Limits the FPS to reduce CPU/GPU usage
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "grab", // Add particles on click
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse", // Repulse particles on hover
                                },
                                resize: true, // Enable canvas resize with window
                            },
                            modes: {
                                push: {
                                    quantity: 1, // Number of particles added on click
                                },
                                repulse: {
                                    distance: 200, // Distance of repulsion
                                    duration: 0.4, // Duration of repulsion effect
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#2980b9", // Particle color
                            },
                            links: {
                                color: "#b0b0b0", // Link color between particles
                                distance: 150, // Maximum link distance
                                enable: true, // Enable linking of particles
                                opacity: 0.5, // Opacity of the links
                                width: 1, // Width of the links
                            },
                            move: {
                                direction: "none", // Particle movement direction
                                enable: true, // Enable particle movement
                                outModes: {
                                    default: "bounce", // Particles bounce off edges
                                },
                                random: true, // Particles move in straight lines
                                speed: 2, // Speed of particle movement
                                straight: false, // Particles move in random directions
                            },
                            number: {
                                density: {
                                    enable: true, // Enable density-based particle count
                                    area: 800, // Area for density calculation
                                },
                                value: 100, // Number of particles
                            },
                            opacity: {
                                value: 0.5, // Particle opacity
                            },
                            shape: {
                                type: "circle", // Shape of the particles
                            },
                            size: {
                                value: { min: 1, max: 5 }, // Size of the particles
                            },
                        },
                        detectRetina: true, // Enable retina support
                    }}
                />
            )}
        </div>
    );
};

export default ParticlesBackground;
