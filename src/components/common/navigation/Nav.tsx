import { useEffect, useState } from "react";
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
  const [navMenu, setNavMenu] = useState<Nav[]>(navJson);
  const [, setSearchValue] = useAtom(searchValueAtom);
  const location = useLocation(); // useLocation을 사용하여 현재 경로 가져오기

  useEffect(() => {
    // 현재 경로와 비교 후 활성 상태 설정
    const updatedMenu = navMenu.map((nav) => ({
      ...nav,
      isActive:
        location.pathname === nav.path || location.pathname.includes(nav.path),
    }));

    // 활성화된 메뉴의 searchValue 설정
    const activeNav = updatedMenu.find((nav) => nav.isActive);
    if (activeNav) {
      setSearchValue(activeNav.searchValue);
    }

    setNavMenu(updatedMenu);
  }, [location.pathname, setSearchValue]);

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
