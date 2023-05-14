import { useEffect, useState } from "react";

export default function useDashBoard() {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(true);

  function handleSideBarOpen() {
    setSideBarOpen((sideBar: boolean) => {
      localStorage.setItem("sideBar", Number(!sideBar).toString());
      return !sideBar;
    });
  }

  useEffect(() => {
    const isSideBarOpenFlag: boolean = Boolean(
      parseInt(localStorage.getItem("sideBar")!, 10)
    );
    setSideBarOpen(isSideBarOpenFlag);
  }, []);

  return {
    isSideBarOpen,
    handleSideBarOpen,
  };
}
