import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car from "../assets/car.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const greenRef = useRef(null);
  const carRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const img = carRef.current;

    const initAnimation = () => {
      const ctx = gsap.context(() => {
        const containerWidth = 1790;
        const carWidth = img.offsetWidth;

        // Better and stable final position calculation
        const finalX = containerWidth - carWidth - 40;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${containerWidth}`,
            scrub: true,
            pin: true,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Green strip animation
        tl.to(
          greenRef.current,
          {
            width: "95%",
            ease: "none",
          },
          0,
        );

        // Car movement
        tl.to(
          img,
          {
            x: finalX,
            ease: "none",
          },
          0,
        );

        // Cards animation
        tl.to(
          cardsRef.current,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            stagger: 0.05,
          },
          0,
        );

        ScrollTrigger.refresh();
      }, sectionRef);

      return () => ctx.revert();
    };

    if (img.complete) {
      initAnimation();
    } else {
      img.onload = initAnimation;
    }

    // Refresh on resize (important for production)
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-[#cfcfcf] overflow-hidden font-sans"
    >
      {/* TOP CARDS */}
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="absolute top-16 right-[32%] bg-lime-400 p-10 rounded-2xl w-80 opacity-0 scale-75 shadow-2xl"
      >
        <h2 className="text-7xl font-extrabold leading-none">58%</h2>
        <p className="mt-3 text-lg font-medium">
          Increase in pick up point use
        </p>
      </div>

      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="absolute top-16 right-16 bg-neutral-800 text-white p-10 rounded-2xl w-80 opacity-0 scale-75 shadow-2xl"
      >
        <h2 className="text-7xl font-extrabold leading-none">27%</h2>
        <p className="mt-3 text-lg font-medium">
          Increase in pick up point use
        </p>
      </div>

      {/* ROAD STRIP */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-52 bg-[#1e1e1e] overflow-hidden">
        {/* GREEN STRIP */}
        <div
          ref={greenRef}
          className="absolute left-0 top-0 h-full bg-[#45db7d]"
          style={{ width: "0%" }}
        />

        {/* TEXT */}
        <h1 className="absolute left-24 top-1/2 -translate-y-1/2 text-[120px] font-bold tracking-[10px] text-[#1e1e1e] z-10 whitespace-nowrap">
          WELCOME ITZFIZZ
        </h1>

        {/* CAR */}
        <img
          ref={carRef}
          src={car}
          alt="car"
          className="absolute top-1/2 -translate-y-1/2 left-0 w-[420px] z-20"
        />
      </div>

      {/* BOTTOM CARDS */}
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="absolute bottom-[18px] left-[30%] bg-sky-400 p-10 rounded-2xl w-80 opacity-0 scale-75 shadow-2xl"
      >
        <h2 className="text-7xl font-extrabold leading-none">23%</h2>
        <p className="mt-3 text-lg font-medium">
          Decreased in customer phone calls
        </p>
      </div>

      <div
        ref={(el) => (cardsRef.current[3] = el)}
        className="absolute bottom-[18px] right-20 bg-orange-500 p-10 rounded-2xl w-80 opacity-0 scale-75 shadow-2xl"
      >
        <h2 className="text-7xl font-extrabold leading-none">40%</h2>
        <p className="mt-3 text-lg font-medium">
          Decreased in customer phone calls
        </p>
      </div>
    </section>
  );
};

export default Hero;
