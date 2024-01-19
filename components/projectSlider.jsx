"use client";
import Link from "next/link";
import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = () => {
  // useEffect(() => {
  //   const slider = document.querySelector(".slider");
  //   const sections = gsap.utils.toArray(".slider section");

  //   let tl = gsap.timeline({
  //     defaults: {
  //       ease: "none",
  //     },
  //     scrollTrigger: {
  //       trigger: slider,
  //       pin: true,
  //       scrub: 2,
  //       end: () => "+=" + slider.offsetWidth,
  //     },
  //   });
  //   tl.to(slider, {
  //     xPercent: 66,
  //   });

  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   return () => {
  //     // Cleanup code if needed
  //     tl.kill();
  //   };
  // }, []); // Empty dependency array to ensure it runs only once

  return (
    // <div className="projectSlider">
    //   <div className="outer">
    //     <div className="slider">
    //       <section>
    //         <div className="inner">
    //           <img src="dig_voyager.jpg" alt="The Digital Voyager" />
    //           <div className="content">
    //             <h1>Travelers Portfolio</h1>
    //             <h2>The Digital Voyager</h2>
    //             <p>
    //               Website highlighting the travel experiences of a freelance
    //               Fullstack Dev travelling the world. This project was built
    //               using html, css and javascript.
    //             </p>
    //           </div>
    //         </div>
    //       </section>
    //       {/* <section>
    //         <div className="inner">
    //           <img src="nextjs_dashboard.jpg" alt="" />
    //           <div className="content">
    //             <h1>Dashboard using NextJs 14</h1>
    //             <h2>Transactions Dashboard</h2>
    //             <p>
    //               Dashboard application showing the capabilities of nextjs like
    //               pre-rendering, partial rendering etc. It is connected to
    //               vercel databases. This project was built using javascript,
    //               react, Nextjs 14, vercel.
    //             </p>
    //           </div>
    //         </div>
    //       </section>
    //       <section>
    //         <div className="inner">
    //           <img src="dig_voyager.jpg" alt="" />
    //           <div className="content">
    //             <h1>Travelers Portfolio</h1>
    //             <h2>The Digital Voyager</h2>
    //             <p>
    //               Website highlighting the travel experiences of a freelance
    //               Fullstack Dev travelling the world. This project was built
    //               using html, css and javascript.
    //             </p>
    //           </div>
    //         </div>
    //       </section> */}
    //     </div>
    //   </div>
    // </div>
    <div className=" experienceTl h-screen w-screen justify-center items-center">
      <div className="container">
        <main className="row">
          {" "}
          <section className="col">
            <header className="title">
              <h2>PROJECTS</h2>
            </header>

            <div className="contents">
              <div className="box">
                <h3 className="font-bold">Book Listing Application - CRUD </h3>
                <p>MERN Stack</p>
                <br />
                <p className="font-bold">Skills :</p>
                <p>Javascript, MongoDB , Expressjs , Reactjs , Nodejs</p>

                <Link href="https://github.com/mineel2107/book_listing_MERN">
                  <p className="font-bold mt-3 w-full mx-auto box-border ">
                    Github Repo
                  </p>
                </Link>
              </div>

              <div className="box">
                <h3 className="font-bold">Nextjs Dashboard</h3>
                <p>Nextjs 14</p>
                <br />
                <p className="font-bold">Skills :</p>
                <p>Javascript, Reactjs , Vercel </p>

                <Link href="https://github.com/mineel2107/dashboard_application_nextjs">
                  <p className="font-bold mt-3 w-full mx-auto ">Github Repo</p>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectSlider;
