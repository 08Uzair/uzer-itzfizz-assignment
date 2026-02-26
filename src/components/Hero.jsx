import { useRef } from "react";
import car from "../assets/car.png";
import StatCard from "./StatCard";
import RoadStrip from "./RoadStrip";
import { useHeroAnimation } from "../hooks/useHeroAnimation.js";

const Hero = () => {
  const sectionRef = useRef(null);
  const greenRef = useRef(null);
  const carRef = useRef(null);
  const cardsRef = useRef([]);

  useHeroAnimation({
    sectionRef,
    greenRef,
    carRef,
    cardsRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#cfcfcf] overflow-hidden font-sans"
    >
      <StatCard
        value="58%"
        text="Increase in pick up point use"
        className="absolute top-16 right-[32%] bg-lime-400"
        cardRef={(el) => (cardsRef.current[0] = el)}
      />

      <StatCard
        value="27%"
        text="Increase in pick up point use"
        className="absolute top-16 right-16 bg-neutral-800 text-white"
        cardRef={(el) => (cardsRef.current[1] = el)}
      />

      <RoadStrip greenRef={greenRef} carRef={carRef} car={car} />

      <StatCard
        value="23%"
        text="Decreased in customer phone calls"
        className="absolute bottom-[18px] left-[30%] bg-sky-400"
        cardRef={(el) => (cardsRef.current[2] = el)}
      />

      <StatCard
        value="40%"
        text="Decreased in customer phone calls"
        className="absolute bottom-[18px] right-20 bg-orange-500"
        cardRef={(el) => (cardsRef.current[3] = el)}
      />
    </section>
  );
};

export default Hero;
