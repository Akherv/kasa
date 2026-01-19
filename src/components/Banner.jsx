import "../style/Banner.css";

function Banner(props) {
  return (
    <div
      className={props.type === "hero" ? "banner hero" : "banner hero_about"}
    >
      {props.children && <h1>{props.children}</h1>}
    </div>
  );
}
export default Banner;
