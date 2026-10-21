import { useCart } from '../context/CartContext.jsx';
import './CartDrawer.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`Checkout stub — subtotal $${subtotal.toFixed(2)}. Wire this up to your real payment provider (Stripe, Shopify, etc).`);
  };

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="cart-drawer-header">
          <h2>Your Bag</h2>
          <button className="close-btn" onClick={closeCart} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your bag is empty.</p>
            <button className="btn-primary" onClick={closeCart}>Keep Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.key}>
                  <div className="cart-item-swatch" style={{ background: item.tone }} />
                  <div className="cart-item-info">
                    <div className="cart-item-top">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="mono">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <span className="cart-item-size mono">Size {item.size} · {item.category}</span>
                    <div className="qty-row">
                      <div className="qty-stepper">
                        <button onClick={() => updateQty(item.key, item.qty - 1)} aria-label="Decrease quantity">−</button>
                        <span className="mono">{item.qty}</span>
                        <button onClick={() => updateQty(item.key, item.qty + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <button className="remove-link" onClick={() => removeItem(item.key)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span className="mono">${subtotal.toFixed(2)}</span>
              </div>
              <p className="cart-note">Shipping and taxes calculated at checkout.</p>
              <button className="btn-primary checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
              <button className="clear-link" onClick={clearCart}>Clear bag</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}