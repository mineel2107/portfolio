"use client";
import { useEffect } from "react";

const HackerText = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  useEffect(() => {
    const handleMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector("h1");
    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      h1Element.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [interval]);

  return (
    <div className="htext bg-black ">
      <h1
        className="text-white text-7xl "
        id="CountingText"
        data-value="MINEEL EPPA"
      >
        MINEEL EPPA
      </h1>
    </div>
  );
};

export default HackerText;
