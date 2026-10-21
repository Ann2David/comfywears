import { useState, useMemo } from 'react';
import ProductCard from './ProductCard.jsx';
import { PRODUCTS } from '../data/products.js';
import './ShopGrid.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'heels', label: 'Heels' },
];

export default function ShopGrid() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="shop" className="shop-section">
      <div className="shop-header">
        <div>
          <h2>Shop the Collection</h2>
          <p>Sneakers and heels, both built on the same cushioned comfort platform.</p>
        </div>
        <div className="filter-tabs" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? 'is-active' : ''}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div id="sneakers" className="anchor-spacer" />
      <div id="heels" className="anchor-spacer" />

      <div className="product-grid">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}