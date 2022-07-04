import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import "../style/Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="board">
        <Thumb />
      </div>
    </div>
  );
}
export default Home;
