import SplitText from './SplitText.jsx';
import Plasma from './Plasma.jsx';
import './Hero.css';

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;
const SNEAKER_PHOTO = u('photo-1664095884822-84eefbb8b3d1');
const HEEL_PHOTO = u('photo-1562687848-c1664eff566d');
const HEEL_PHOTO_2 = u('photo-1535043934128-cf0b28d52f95');

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-plasma" aria-hidden="true">
        <Plasma
          color="#E39A2D"
          speed={0.6}
          direction="forward"
          scale={1.3}
          opacity={0.35}
          mouseInteractive={true}
        />
      </div>

      <div className="hero-copy">
        <p className="eyebrow mono">HEELS &amp; SNEAKERS, RETHOUGHT</p>
        <h1 className="hero-heading">
          <SplitText
            tag="span"
            text="Shoes built for"
            className="hero-line"
            splitType="chars"
            delay={22}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <br />
          <SplitText
            tag="span"
            text="the way you"
            className="hero-line"
            splitType="chars"
            delay={22}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <br />
          <SplitText
            tag="span"
            text="actually"
            className="hero-line hero-line-em"
            splitType="chars"
            delay={22}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
          <SplitText
            tag="span"
            text=" move."
            className="hero-line"
            splitType="chars"
            delay={22}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 32 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="0px"
            textAlign="left"
          />
        </h1>
        <p className="hero-sub">
          Every pair is cushioned, tested, and fit-checked before it ships —
          whether you're on your feet all day or out the door for a night off.
        </p>
        <div className="hero-cta">
          <a href="#shop" className="btn-primary">Shop the Collection</a>
          <a href="#faq" className="btn-text">How it fits →</a>
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="art-tile tile-1"><img src={SNEAKER_PHOTO} alt="" /></div>
        <div className="art-tile tile-2"><img src={HEEL_PHOTO} alt="" /></div>
        <div className="art-tile tile-3"><img src={HEEL_PHOTO_2} alt="" /></div>
      </div>
    </section>
  );
}