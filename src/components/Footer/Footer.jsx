import { Link, NavLink } from 'react-router';
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_grid">
          <div className="footer_brand">
            <div className="footer_logo">CinEvent</div>
          </div>

          <div className="footer_col">
            <h4>Utforska</h4>
            <Link to="/">Nu på bio</Link>
            <Link to="/">Kommande</Link>
            <Link to="/">Erbjudanden</Link>
            <Link to="/">Presentkort</Link>
          </div>

          <div className="footer_col">
            <h4>Hjälp</h4>
            <Link to="/">Vanliga frågor</Link>
            <Link to="/">Återbetalningar</Link>
            <Link to="/">Tillgänglighet</Link>
            <Link to="/">Kontakt</Link>
          </div>

          <div className="footer_col">
            <h4>Följ oss</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">TikTok</Link>
            <Link to="/">Newsletter</Link>
          </div>
        </div>

        <div className="footer_bottom">
          <span>© CinEvent AB</span>
          <div className="footer_legal">
            <Link to="/">Integritetspolicy</Link>
            <Link to="/">Användarvillkor</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}