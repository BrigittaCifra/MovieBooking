import "./Campaign.css";

export default function Campaign() {
    return (
        <section className="campaign-banner">
            <div className="container">
                <div className="campaign-banner__inner">

                    <div className="campaign-banner__content">
                        <span className="tag">CINEVENT PLUS</span>
                        <h2>Obegränsat med film.<br />En månad gratis.</h2>
                        <p>Få tillgång till alla visningar, rabatter på snacks och förhandsbokningar innan alla andra.</p>
                        <button className="btn btn--primary btn--large">Prova gratis i 30 dagar</button>
                    </div>

                    <div className="campaign-banner__visual">
                        <div className="campaign-card">
                            <div className="campaign-card__logo">CINEVENT</div>
                            <div className="campaign-card__tier">PLUS</div>
                            <div className="campaign-card__name">Anna Swedenborg</div>
                            <div className="campaign-card__number">•••• •••• •••• 4821</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}