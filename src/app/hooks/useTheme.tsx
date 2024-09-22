import { useEffect, useRef } from "react";
import Theme, { ITheme } from "../model/Theme";

export default function useTheme(): ITheme {
  const themeRef = useRef<Theme>();

  if (themeRef.current == null) {
    themeRef.current = new Theme();
  }

  useEffect(() => {
    function listener() {
      themeRef.current?.setWindowSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("change", listener);

    return () => window.removeEventListener("change", listener);
  }, []);

  return themeRef.current;
}
