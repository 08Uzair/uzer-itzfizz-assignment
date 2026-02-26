const StatCard = ({ value, text, className, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className={`p-10 rounded-2xl w-80 opacity-0 scale-75 shadow-2xl ${className}`}
    >
      <h2 className="text-7xl font-extrabold leading-none">{value}</h2>
      <p className="mt-3 text-lg font-medium">{text}</p>
    </div>
  );
};

export default StatCard;