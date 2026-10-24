import { site } from '../../data/site';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          {site.name} · portfolio skeleton
        </p>
      </div>
    </footer>
  );
}

export default Footer;
