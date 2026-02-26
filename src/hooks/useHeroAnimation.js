import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createHeroTimeline } from "../utility/createHeroTimeline";

export const useHeroAnimation = ({
  sectionRef,
  greenRef,
  carRef,
  cardsRef,
}) => {
  useEffect(() => {
    const img = carRef.current;
    if (!img) return;

    const init = () => {
      const ctx = createHeroTimeline({
        section: sectionRef.current,
        greenStrip: greenRef.current,
        car: carRef.current,
        cards: cardsRef.current,
      });

      ScrollTrigger.refresh();
    };

    if (img.complete) {
      init();
    } else {
      img.onload = init;
    }

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};
