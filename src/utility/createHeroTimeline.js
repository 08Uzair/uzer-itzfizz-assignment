import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { calculateFinalX } from "../utility/calculateFinalX";

gsap.registerPlugin(ScrollTrigger);

export const createHeroTimeline = ({
  section,
  greenStrip,
  car,
  cards,
  containerWidth = 1790,
}) => {
  const carWidth = car.offsetWidth;
  const finalX = calculateFinalX(containerWidth, carWidth);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${containerWidth}`,
      scrub: true,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  tl.to(greenStrip, { width: "95%", ease: "none" }, 0);

  tl.to(car, { x: finalX, ease: "none" }, 0);

  tl.to(
    cards,
    {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      stagger: 0.05,
    },
    0,
  );

  return tl;
};