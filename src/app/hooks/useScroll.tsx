import { useEffect, useState } from "react";

export default function useScroll() {
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    function listener() {
      setScrollYPosition(window.scrollY);
    }

    window.addEventListener("scroll", listener);
    setScrollYPosition(window.scrollY);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return scrollYPosition;
}
