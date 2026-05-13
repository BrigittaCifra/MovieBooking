import { Link } from 'react-router';
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
            <h4>explore</h4>
            <Link to="/">New to cinema</Link>
            <Link to="/">Coming soon</Link>
            <Link to="/">Offers</Link>
            <Link to="/">Gift cards</Link>
          </div>

          <div className="footer_col">
            <h4>Help</h4>
            <Link to="/">Common questions</Link>
            <Link to="/">Refunds</Link>
            <Link to="/">Accessibility</Link>
            <Link to="/">Contact</Link>
          </div>

          <div className="footer_col">
            <h4>Follow us</h4>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">TikTok</Link>
            <Link to="/">Newsletter</Link>
          </div>
        </div>

        <div className="footer_bottom">
          <span>© CinEvent AB</span>
          <div className="footer_legal">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}