import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { ArticleIcon, CreateIcon, HomeIcon, LogoutIcon } from "../Icon/icon";
import style from "./SideBar.module.scss";

export default function SideBar({ isSideBarOpen }: { isSideBarOpen: boolean }) {
  const { user } = useUser();

  return (
    <div className={style.sideBar}>
      <h2 className={isSideBarOpen ? `${style.title}` : `${style.titleActive}`}>
        {isSideBarOpen ? "Tech Itokawa" : "T"}
      </h2>
      <ul className={style.menu}>
        <li className={style.menuItem}>
          <Link
            href="/"
            className={
              isSideBarOpen ? `${style.menuLink}` : `${style.menuLinkActive}`
            }
          >
            <HomeIcon className={style.icon} />
            {isSideBarOpen ? "Home" : ""}
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link
            href={`/${user?.nickname}/`}
            className={
              isSideBarOpen ? `${style.menuLink}` : `${style.menuLinkActive}`
            }
          >
            <ArticleIcon className={style.icon} />
            {isSideBarOpen ? "Articles" : ""}
          </Link>
        </li>
        <li className={style.menuItem}>
          <Link
            href={`/${user?.nickname}/create`}
            className={
              isSideBarOpen ? `${style.menuLink}` : `${style.menuLinkActive}`
            }
          >
            <CreateIcon className={style.icon} />
            {isSideBarOpen ? "Create" : ""}
          </Link>
        </li>
      </ul>
      <Link
        href="/api/auth/logout"
        type="button"
        className={
          isSideBarOpen
            ? `${style.logoutButton}`
            : `${style.logoutButtonActive}`
        }
      >
        <LogoutIcon className={style.icon} />
        {isSideBarOpen ? "Logout" : ""}
      </Link>
    </div>
  );
}
