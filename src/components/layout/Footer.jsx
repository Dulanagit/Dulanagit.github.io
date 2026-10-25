import { site } from '../../data/site';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
        © {new Date().getFullYear()} Dulana Avishka · Sri Lanka
        </p>
      </div>
    </footer>
  );
}

export default Footer;
