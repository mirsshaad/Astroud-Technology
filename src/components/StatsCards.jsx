export function StatsCards() {
  const stats = [
    { number: '99.9%', label: 'Infrastructure Reliability' },
    { number: '24/7', label: 'Managed Support' },
    { number: '100%', label: 'Cloud-Focused' },
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
