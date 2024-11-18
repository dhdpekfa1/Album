import { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import navJson from "./nav.json";
import styles from "./nav.module.scss";
import { searchValueAtom } from "@/store";

export interface Nav {
  id: number;
  path: string;
  label: string;
  searchValue: string;
  isActive: boolean;
}

const Nav = () => {
  const [navMenu, setNavMenu] = useState<Nav[]>([]);
  const [, setSearchValue] = useAtom(searchValueAtom);
  const location = useLocation();

  const updatedMenu = useMemo(() => {
    return navJson.map((nav) => ({
      ...nav,
      isActive:
        location.pathname === nav.path || location.pathname.includes(nav.path),
    }));
  }, [location.pathname]);

  useEffect(() => {
    setNavMenu(updatedMenu);
    const activeNav = updatedMenu.find((nav) => nav.isActive);
    if (activeNav) {
      setSearchValue(activeNav.searchValue);
    }
  }, [updatedMenu, setSearchValue]);

  return (
    <nav className={styles.nav}>
      {navMenu.map((nav: Nav) => (
        <Link
          to={nav.path}
          key={nav.id}
          className={`${
            nav.isActive ? "border-b-2 border-solid border-cyan-950" : ""
          }`}
        >
          <small className={`text-sm font-normal leading-10 ${"font-bold"}`}>
            {nav.label}
          </small>
        </Link>
      ))}
    </nav>
  );
};

export { Nav };
