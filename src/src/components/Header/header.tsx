import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { NavBarIcon, SearchIcon } from "../Icon/icon";
import style from "./header.module.scss";
import useHeader from "./useHeader";
import { kleeOne, mrsSaintDelafield } from "@/utility/font";

export default function Header() {
  const { isNavOpen, handleNavOpen } = useHeader();
  const { user } = useUser();

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={`${mrsSaintDelafield.className} ${style.title}`}>
          <Link href="/">Tech Itokawa</Link>
        </h1>
        <nav
          className={isNavOpen ? `${style.nav} ${style.navActive}` : style.nav}
        >
          <ul className={style.navContainer}>
            <li className={style.navItem}>
              <Link
                href="/"
                className={`${kleeOne.className} ${style.navLink}`}
              >
                ホーム
              </Link>
            </li>
            {user ? (
              <li className={style.navItem}>
                <Link
                  href={`/${user.nickname}/`}
                  className={`${kleeOne.className} ${style.navLink}`}
                >
                  ダッシュボード
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
        <button className={style.searchBtn}>
          <SearchIcon />
        </button>
        <button
          className={
            isNavOpen
              ? `${style.navBarBtn} ${style.navBarBtnActive}`
              : style.navBarBtn
          }
          onClick={handleNavOpen}
        >
          <NavBarIcon />
        </button>
      </div>
    </header>
  );
}
