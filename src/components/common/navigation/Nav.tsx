import { useState } from "react";
import { Link } from "react-router-dom";
import navJson from "./nav.json";
import styles from "./nav.module.scss";

export interface Nav {
  id: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

const Nav = () => {
  const [navMene, setNavMenu] = useState<Nav[]>(navJson);

  return (
    <nav className={styles.nav}>
      {navMene.map((nav: Nav) => (
        <Link to={nav.path} key={nav.id}>
          <small className="text-sm font-normal leading-10">{nav.label}</small>
        </Link>
      ))}
    </nav>
  );
};

export { Nav };
