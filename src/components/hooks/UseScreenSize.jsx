"use client";
import { useEffect, useState } from "react";

const UseScreenSize = () => {
  const [ScreenSize, setScreenSize] = useState();

  useEffect(() => {
    function getscreensize() {
      return window.innerWidth;
    }

    function handelscreensize() {
      setScreenSize(getscreensize());
    }

    // Set initial size
    handelscreensize();

    // Correct: pass reference, NOT call
    window.addEventListener("resize", handelscreensize);
    return () => window.removeEventListener("resize", handelscreensize);
  }, []);

  return ScreenSize;
};

export default UseScreenSize;
