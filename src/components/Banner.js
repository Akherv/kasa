import "../style/Banner.css";

function Banner(props) {
  return (
    <div
      className={props.type === "hero" ? "banner hero" : "banner hero_about"}
    >
      <h1>{props.children}</h1>
    </div>
  );
}
export default Banner;
