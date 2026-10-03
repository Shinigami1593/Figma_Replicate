export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p>
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <button type="button" className="services-button">
            Services
          </button>
        </div>

        <div className="hero-services" aria-label="Our services">
          <p>UI &amp; UX</p>
          <p>Development</p>
          <p>Blockchain</p>
        </div>
      </div>
    </section>
  );
}