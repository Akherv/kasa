import Dropdown from "../components/Dropdown";
import Banner from "../components/Banner";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <Banner type={"hero_about"} />
      <div className="about_dropdown_container">
        <Dropdown title={"Fiabilité"} size="large">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Dropdown>
        <Dropdown title={"Respect"} size="large">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Dropdown>
        <Dropdown title={"Service"} size="large">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </Dropdown>
        <Dropdown title={"Sécurité"} size="large">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Dropdown>
      </div>
    </div>
  );
}
export default About;
