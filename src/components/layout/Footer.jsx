import { site } from '../../data/site';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          {site.name} · Portfolio Website · All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
