const RoadStrip = ({ greenRef, carRef, car }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 w-full h-52 bg-[#1e1e1e] overflow-hidden">
      <div
        ref={greenRef}
        className="absolute left-0 top-0 h-full bg-[#45db7d]"
        style={{ width: "0%" }}
      />

      <h1 className="absolute left-24 top-1/2 -translate-y-1/2 text-[120px] font-bold tracking-[10px] text-[#1e1e1e] z-10 whitespace-nowrap">
        WELCOME ITZFIZZ
      </h1>

      <img
        ref={carRef}
        src={car}
        alt="car"
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[420px] z-20"
      />
    </div>
  );
};

export default RoadStrip;