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
            <a href="#">Nu på bio</a>
            <a href="#">Kommande</a>
            <a href="#">Erbjudanden</a>
            <a href="#">Presentkort</a>
          </div>

          <div className="footer_col">
            <h4>Hjälp</h4>
            <a href="#">Vanliga frågor</a>
            <a href="#">Återbetalningar</a>
            <a href="#">Tillgänglighet</a>
            <a href="#">Kontakt</a>
          </div>

          <div className="footer_col">
            <h4>Följ oss</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TikTok</a>
            <a href="#">Newsletter</a>
          </div>
        </div>

        <div className="footer_bottom">
          <span>© CinEvent AB</span>
          <div className="footer_legal">
            <a href="#">Integritetspolicy</a>
            <a href="#">Användarvillkor</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}