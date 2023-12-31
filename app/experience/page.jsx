import Nav from "@/components/Nav";
import ExperienceTl from "../../components/experienceTl";
import BackgroundStars from "@/components/backgroundStars";

const page = () => {
  return (
    <div className="select-none overflow-hidden">
      <ExperienceTl />
      <BackgroundStars />
      <Nav />
    </div>
  );
};

export default page;
