import BackgroundStars from "./backgroundStars";
import HackerText from "./hackerText";
import StarryText from "./starryText";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row w-full mr-70px h-full z-20">
      <div className="flex flex-col w-[70%] justify-start mt-16 mx-auto place-items-start h-full ml-20">
        <div className="flex flex-col align-items-start">
          <h2 className="hello">Hello , </h2>
          <div className=" flex items-center text-center">
            {/* <h2 className="mr-5 text-3xl">I'm </h2> */}
            <StarryText />
          </div>
          <h2 className="hello">Freelance Web Dev</h2>
        </div>
        <h2 className="desc mt-10">
          Building the <div className="text-secondary ml-3"> Internet</div>
        </h2>
        <h2 className="desc ">
          <div className="text-secondary mr-3 ml-32">Website</div> at a time
        </h2>

        {/* <h2 className="colab flex flex-row">
          Let's Colab {"  "}
          <HiArrowRight className="text-white text-4xl group-hover:translate-x-2 transition-all duration-300 ml-3" />
        </h2> */}
      </div>
      {/* <div className="w-[25%] justify-end mr-14 rounded-full my-auto dev_img">
        <Image
          src="/mirror_selfie.jpg"
          width={300}
          height={700}
          alt="Developers Picture "
          loading="lazy"
          className="rounded-t-full rounded-b-full"
        />
      </div> */}
    </div>
  );
};

export default Hero;
