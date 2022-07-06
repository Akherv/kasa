import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <Banner type={"hero_about"} />
      <Dropdown />
    </div>
  );
}
export default About;
