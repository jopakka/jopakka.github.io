import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  const [state, setState] = useState(false);

  useEffect(() => {
    function handler(this: MediaQueryList) {
      setState(this.matches);
    }

    const media = window.matchMedia(query)
    media.addEventListener("change", handler);
    setState(media.matches);

    return () => {
      media.removeEventListener("change", handler);
    }
  }, [query])

  return state;
}