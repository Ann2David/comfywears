import './PressBar.css';

const QUOTES = [
  { text: '"The first sneaker brand that actually delivers on the comfort promise."', pub: 'STRIDE' },
  { text: '"A heel you can wear past 9pm without regret."', pub: 'SOLE CULTURE' },
  { text: '"Comfy Wear is quietly rebuilding what a shoe closet looks like."', pub: 'PACE' },
];

export default function PressBar() {
  return (
    <section className="press-bar">
      {QUOTES.map((q) => (
        <div className="press-item" key={q.pub}>
          <p>{q.text}</p>
          <span className="press-pub">{q.pub}</span>
        </div>
      ))}
    </section>
  );
}