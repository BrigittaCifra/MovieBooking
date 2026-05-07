import "./Campaign.css";

export default function Campaign({ onMembershipClick }) {
    return (
        <section className="campaign-banner">
            <div className="container">
                <div className="campaign-banner__inner">

                    <div className="campaign-banner__content">
                        <span className="tag">CINEVENT PLUS</span>
                        <h2>Unlimited movies.<br />One month free.</h2>
                        <p>Collect points and get access to all screenings, discounts on snacks and early bookings before everyone else.</p>
                        <button className="btn btn--primary btn--large" onClick={onMembershipClick}>
                            Try for free for 30 days
                        </button>
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