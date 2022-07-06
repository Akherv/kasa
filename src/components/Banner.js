import "../style/Banner.css";

function Banner({ type }) {
  return (
    <div className={type === "hero" ? "banner hero" : "banner hero_about"}>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
export default Banner;
