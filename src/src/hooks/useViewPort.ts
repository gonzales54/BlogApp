import { useEffect, useState } from "react";

export default function useViewPort() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    function getWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", getWidth);
    getWidth();
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return {
    width,
  };
}
