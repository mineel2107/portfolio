"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";

const BackgroundStars = () => {
  //   const particlesInit = useCallback(async (engine) => {
  //     await loadFull(engine);
  //   }, []);

  //   const particlesLoaded = useCallback(() => {}, []);

  //   return (
  //     <Particles
  //       className="w-full h-full absolute translate-z-0"
  //       id="tsparticles"
  //       init={particlesInit}
  //       loaded={particlesLoaded}
  //       options={{
  //         fullScreen: { enable: true },
  //         background: {
  //           color: {
  //             value: "",
  //           },
  //         },
  //         fpsLimit: 120,
  //         interactivity: {
  //           events: {
  //             onClick: {
  //               enable: false,
  //               mode: "push",
  //             },
  //             onHover: {
  //               enable: true,
  //               mode: "repulse",
  //             },
  //             resize: true,
  //           },
  //           modes: {
  //             push: {
  //               quantity: 90,
  //             },
  //             repulse: {
  //               distance: 200,
  //               duration: 0.4,
  //             },
  //           },
  //         },
  //         particles: {
  //           color: {
  //             value: "#e68e2e",
  //           },
  //           links: {
  //             color: "#f5d393",
  //             distance: 150,
  //             enable: true,
  //             opacity: 0.5,
  //             width: 1,
  //           },
  //           collisions: {
  //             enable: true,
  //           },
  //           move: {
  //             direction: "none",
  //             enable: true,
  //             outModes: {
  //               default: "bounce",
  //             },
  //             random: false,
  //             speed: 1,
  //             straight: false,
  //           },
  //           number: {
  //             density: {
  //               enable: true,
  //               area: 800,
  //             },
  //             value: 80,
  //           },
  //           opacity: {
  //             value: 0.5,
  //           },
  //           shape: {
  //             type: "circle",
  //           },
  //           size: {
  //             value: {
  //               min: 1,
  //               max: 5,
  //             },
  //           },
  //         },
  //         detectRetina: true,
  //       }}
  //     />
  //   );
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="bgStars ml-2"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#182418",
          },
          links: {
            color: "#b6c4b6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundStars;
