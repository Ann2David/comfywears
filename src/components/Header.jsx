import { useCart } from '../context/CartContext.jsx';
import './Header.css';

export default function Header() {
  const { count, openCart } = useCart();

  return (
    <header className="header">
      <a href="#top" className="wordmark">COMFY WEAR</a>

      <nav className="header-nav">
        <a href="#shop">Shop</a>
        <a href="#sneakers">Sneakers</a>
        <a href="#heels">Heels</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className="header-actions">
        <button className="ghost-btn">Sign In</button>
        <button className="cart-btn" onClick={openCart} aria-label={`Open cart, ${count} items`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 8h12l-1 12H7L6 8z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span className="mono">Cart{count > 0 ? ` (${count})` : ''}</span>
        </button>
      </div>
    </header>
  );
}