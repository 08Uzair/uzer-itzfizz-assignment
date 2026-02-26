import { useRef } from "react";
import car from "../assets/car.png";
import StatCard from "./StatCard";
import RoadStrip from "./RoadStrip";
import { useHeroAnimation } from "../hooks/useHeroAnimation.js";
import { HERO_CARDS } from "../constants/index.js";

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
      {HERO_CARDS.slice(0, 2).map((card, index) => (
        <StatCard
          key={card.id}
          value={card.value}
          text={card.text}
          className={card.className}
          cardRef={(el) => (cardsRef.current[index] = el)}
        />
      ))}

      <RoadStrip greenRef={greenRef} carRef={carRef} car={car}  />

      {HERO_CARDS.slice(2).map((card, index) => (
        <StatCard
          key={card.id}
          value={card.value}
          text={card.text}
          className={card.className}
          cardRef={(el) => (cardsRef.current[index + 2] = el)}
        />
      ))}
    </section>
  );
};

export default Hero;
