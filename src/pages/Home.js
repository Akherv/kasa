import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import "../style/Home.css";

function Home({ locations }) {
  return (
    <div className="home">
      <Banner type={"hero"}>
        Chez vous,
        <br className="br" /> partout et ailleurs
      </Banner>
      <div className="board">
        {locations && locations.map((el, idx) => <Thumb key={idx} {...el} />)}
      </div>
    </div>
  );
}
export default Home;
