import { useEffect, useState } from 'react';
import { site } from '../../data/site';

function Header() {
  const [active, setActive] = useState(site.nav[0].id);

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    const pick = () => {
      const line = document.querySelector('.site-header').getBoundingClientRect().bottom + 36;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      if (current) setActive(current.id);
    };

    const observer = new IntersectionObserver(() => pick(), {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.25],
    });

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', pick, { passive: true });
    pick();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', pick);
    };
  }, []);

  useEffect(() => {
    const link = document.querySelector(`.site-nav a[href="#${active}"]`);
    const nav = link?.parentElement;
    if (!link || !nav) return;
    nav.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' });
  }, [active]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#hero">
          {site.name}
        </a>
        <nav className="site-nav" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={item.id === active ? 'is-active' : undefined}
              aria-current={item.id === active ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
