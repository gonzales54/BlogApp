import { ReactNode } from "react";
import DashBoardUserInformationHeader from "../DashBoardUserInformationHeader/DashBoardUserInformationHeader";
import { HandleSideBarIcon } from "../Icon/icon";
import SideBar from "../SideBar/SideBar";
import style from "./DashBoardLayout.module.scss";
import useDashBoard from "./useDashBoard";

export default function DashBoardLayout({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  const { isSideBarOpen, handleSideBarOpen } = useDashBoard();

  return (
    <div className={style.dashBoardLayout}>
      <SideBar isSideBarOpen={isSideBarOpen} />
      <div className={style.dashBoardLayoutBody}>
        <div className={style.dashBoardHeader}>
          <button type="button" onClick={handleSideBarOpen}>
            <HandleSideBarIcon isSideBarOpen={isSideBarOpen} />
          </button>
          <DashBoardUserInformationHeader />
        </div>
        {children}
      </div>
    </div>
  );
}
