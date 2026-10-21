import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PressBar from './components/PressBar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ShopGrid from './components/ShopGrid.jsx';
import Testimonials from './components/Testimonials.jsx';
import Stats from './components/Stats.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <Header />
      <Hero />
      <PressBar />
      <Stats />

      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <ShopGrid />
          <Testimonials />
        </main>
      </div>

      <FAQ />
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}