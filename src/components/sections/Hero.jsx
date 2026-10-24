import { site } from '../../data/site';

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="container hero-grid">
        <div className="hero-media">
          <img src={site.heroImage} alt={`${site.name} professional portrait`} />
        </div>
        <div className="hero-copy">
          <p className="section-kicker">{site.name}</p>
          <p className="identity">{site.identity}</p>
          <h1>{site.quote}</h1>
          <div className="hero-paths">
            {site.paths.map((path) => (
              <a key={path.id} className={`path-chip path-${path.id}`} href={path.href}>
                {path.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
