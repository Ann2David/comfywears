import { useState, useEffect } from 'react';
import './Sidebar.css';

const SECTIONS = [
  { id: 'shop', label: 'Shop All' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'heels', label: 'Heels' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
];

export default function Sidebar() {
  const [active, setActive] = useState('shop');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <nav>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''}>
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}