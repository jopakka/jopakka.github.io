import { ReactNode, RefObject, useEffect, useState } from "react";

export interface LazyComponentProps {
  margin: number;
  children: ReactNode;
  ref: RefObject<HTMLElement>;
}

const LazyComponent = ({
  margin = 0,
  ref,
  children,
}: LazyComponentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const tempRef = ref.current;
    if (tempRef == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(tempRef);
        }
      },
      {
        root: null, // viewport
        rootMargin: `${margin}px`, // no margin
        threshold: 0, // 50% of target visible
      }
    );

    observer.observe(tempRef);

    // Clean up the observer
    return () => {
      observer.unobserve(tempRef);
    };
  }, [margin, ref]);

  return (isVisible && children)
}

export default LazyComponent;