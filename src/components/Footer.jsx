import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">COMFY WEAR</div>
        <form className="newsletter" onSubmit={handleSubmit}>
          {subscribed ? (
            <span className="mono">You're on the list ✓</span>
          ) : (
            <>
              <input
                type="email"
                placeholder="Get 10% off your first order"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </>
          )}
        </form>
      </div>

      <div className="footer-links">
        <a href="#shop">Shop</a>
        <a href="#faq">Sizing Guide</a>
        <a href="#faq">Returns</a>
        <a href="#faq">Contact Us</a>
      </div>

      <div className="footer-bottom mono">
        <span>© 2026 Comfy Wear. All rights reserved.</span>
        <span>@comfywear</span>
      </div>
    </footer>
  );
}