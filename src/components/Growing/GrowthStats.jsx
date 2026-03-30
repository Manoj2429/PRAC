import "./GrowthStats.css";

const stats = [
  {
    value: "0.29 Mn",
    label: "Total Course Available on Platform",
    icon: "🎓",
  },
  {
    value: "681",
    label: "Corporates on the TCS iON job listing platforms",
    icon: "📝",
  },
  {
    value: "10.4 Mn",
    label: "Total Registered Users",
    icon: "👤",
  },
  {
    value: "532 Mn",
    label: "Candidates Assessed",
    icon: "🎓",
  },
  {
    value: "19 Mn",
    label: "Learners on the cloud",
    icon: "👩‍💻",
  },
];

const GrowthStats = () => {
  return (
    <section className="growth">
      <h2>We are Growing</h2>
      <p className="subtitle">
        Our numbers speak for themselves! We're a step ahead in every segment.
      </p>

      <div className="stats">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthStats;
