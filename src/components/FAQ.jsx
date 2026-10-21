import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  { q: 'How does Comfy Wear sizing work?', a: 'We run true to size for sneakers and recommend sizing up half a size for heels, since our footbeds are slightly thicker for comfort. Each product page has a specific fit note.' },
  { q: 'What is your return policy?', a: 'Free returns within 45 days of delivery, worn or unworn. If the fit or comfort isn\u2019t right, send it back for a full refund or exchange.' },
  { q: 'Do you offer wide sizes?', a: 'Select styles are available in wide widths — look for the "W" tag on the product card, with more styles added each season.' },
  { q: 'How long does shipping take?', a: 'Standard shipping takes 3\u20135 business days. Express (1\u20132 days) is available at checkout for an additional fee.' },
  { q: 'Is there a comfort guarantee?', a: 'Yes — wear them around the house for a week. If they\u2019re not the most comfortable shoes you own, we\u2019ll take them back.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div className="faq-item" key={item.q}>
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {item.q}
              <span className={`faq-chevron ${openIndex === i ? 'is-open' : ''}`}>&#9662;</span>
            </button>
            {openIndex === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}