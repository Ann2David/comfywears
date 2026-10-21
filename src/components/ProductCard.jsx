import { useState } from 'react';
import { SneakerArt, HeelArt } from './ShoeArt.jsx';
import { useCart } from '../context/CartContext.jsx';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [size, setSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)]);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();
  const Art = product.category === 'sneakers' ? SneakerArt : HeelArt;

  const handleAdd = () => {
    addItem(product, size, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="product-card">
      <div className="product-art">
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <Art tone={product.tone} />
      </div>

      <div className="product-info">
        <div className="product-heading">
          <h3>{product.name}</h3>
          <span className="mono product-price">${product.price}</span>
        </div>
        <p className="product-desc">{product.description}</p>

        <div className="product-controls">
          <select
            className="size-select mono"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            aria-label={`Select size for ${product.name}`}
          >
            {product.sizes.map((s) => (
              <option key={s} value={s}>Size {s}</option>
            ))}
          </select>

          <button className={`add-btn ${justAdded ? 'is-added' : ''}`} onClick={handleAdd}>
            {justAdded ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}