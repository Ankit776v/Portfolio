import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to handle fade-in animations on scroll
 * Usage:
 * const [ref, visible] = useFadeIn();
 * <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}></div>
 */
const useFadeIn = (threshold = 0.2) => {
  const ref = useRef(null);          // Ref to attach to the DOM element
  const [visible, setVisible] = useState(false);  // Track if element is visible

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);       // Element has appeared
            obs.unobserve(entry.target); // Stop observing after it’s visible
          }
        });
      },
      { threshold }               // Trigger when element is 20% visible by default
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, visible];
};

export default useFadeIn;