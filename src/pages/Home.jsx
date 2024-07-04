import "./Home.css";
import logoImage from "../assets/vieudetour1.png";
import { useNavigate } from "react-router-dom";

function Accueil() {
  const navigate = useNavigate();
  return (
    <main className="accueil">
      <div className="logo-container">
        <img className="logo" src={logoImage} alt="logo" />
      </div>
      <h1 className="mainTitle">AIDE UN VIOQUE</h1>
      <div className="button">
        <button
          onClick={() => {
            navigate("/search");
          }}
          className="button1"
          type="button"
        >
          Associations
        </button>
        <button className="button2" type="button">
          Informations
        </button>
      </div>
    </main>
  );
}

export default Accueil;
