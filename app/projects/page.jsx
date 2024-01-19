import Nav from "@/components/Nav";
import ProjectCards from "../../components/projectCards";
import ProjectSlider from "../../components/projectSlider";
import BackgroundStars from "@/components/backgroundStars";

const page = () => {
  return (
    <div className="select-none">
      {/* <ProjectCards /> */}
      <ProjectSlider />
      <BackgroundStars />
      <Nav />
    </div>
  );
};

export default page;
