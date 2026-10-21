import './Stats.css';

const STATS = [
  { value: '340+', label: 'STYLES DESIGNED' },
  { value: '80K+', label: 'HAPPY WALKERS' },
  { value: '4.8/5', label: 'AVERAGE COMFORT RATING' },
];

export default function Stats() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label mono">{s.label}</div>
        </div>
      ))}
    </section>
  );
}