import { useState } from "react";

export default function useHeader() {
  const [isNavOpen, setNavOpen] = useState<boolean>(false);

  function handleNavOpen() {
    setNavOpen((navBar) => !navBar);
  }

  return {
    isNavOpen,
    handleNavOpen,
  };
}
