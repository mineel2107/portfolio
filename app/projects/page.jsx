import Nav from "@/components/Nav";
import ProjectCards from "../../components/projectCards";
import ProjectSlider from "../../components/projectSlider";

const page = () => {
  return (
    <div className="select-none">
      {/* <ProjectCards /> */}
      <ProjectSlider />
      <Nav />
    </div>
  );
};

export default page;
