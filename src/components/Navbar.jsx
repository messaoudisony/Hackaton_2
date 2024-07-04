import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import Icon from "@mdi/react";
import "./Navbar.css";

const LinkNav = ({ link, icon }) => {
  const location = useLocation();
  const colorIcon = link == location?.pathname ? "#E60012" : "#00012E";
  return (
    <div className={styles.linkNav}>
      <NavLink to={link}>
        <Icon path={icon} size={2} color={colorIcon} />
        const navigate = useNavigate();
      </NavLink>
    </div>
  );
};
export default function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className="button-accueil" to={"/"}>
        Accueil
      </NavLink>
      <NavLink className="button-help" to="/help">
        Aide
      </NavLink>
    </div>
  );
}
