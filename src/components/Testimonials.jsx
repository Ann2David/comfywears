import './Testimonials.css';

const REVIEWS = [
  { name: 'Priya N.', role: 'wears the Cloudstep Runner daily', quote: 'I stand for ten hours a shift. These are the first shoes that don\u2019t leave my feet aching by hour three.' },
  { name: 'Jordan M.', role: 'wears the Vera Stiletto', quote: 'Finally a heel I can wear from the office straight through dinner without changing shoes in the cab.' },
  { name: 'Sam T.', role: 'wears the Drift Slip-On', quote: 'Ordered a size up based on the sizing guide and it fit perfectly on the first try.' },
  { name: 'Elena R.', role: 'wears the Amara Kitten Heel', quote: 'The arch support is not a gimmick. I actually feel it.' },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="testimonials">
      <h2>Worn by comfy people</h2>
      <div className="review-row">
        {REVIEWS.map((r) => (
          <div className="review-card" key={r.name}>
            <p className="review-quote">&ldquo;{r.quote}&rdquo;</p>
            <div className="review-meta">
              <span className="review-name">{r.name}</span>
              <span className="review-role">{r.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}