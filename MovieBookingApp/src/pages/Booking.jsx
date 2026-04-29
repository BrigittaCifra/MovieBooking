import { useState, useEffect } from "react";
import { useParams } from "react-router";
import useBookingStore from "../stores/bookingStore";
import useMoviesStore from "../stores/moviesStore";
import SeatMap from "../components/SeatMap/SeatMap";
import "./Booking.css";

function Booking() {
    const { id } = useParams();
    const getMovieById = useMoviesStore((state) => state.getMovieById);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);
    const movie = getMovieById(Number(id));

    const { selectedSeats, clearSeats, getTotalPrice } = useBookingStore();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    const handleSubmit = () => {
        if (selectedSeats.length === 0) return alert("Välj minst en plats!");
        if (!paymentMethod) return alert("Välj betalningsmetod!");
        setIsSubmitted(true);
        clearSeats();
    };

    if (isSubmitted) {
        return (
            <div className="booking-success">
                <h2>Tack för din bokning! 🎬</h2>
                <p>Dina biljetter är bokade. Ha en trevlig filmkväll!</p>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <div className="booking-left">
                <h1 className="booking-title">Välj biljetter</h1>
                <SeatMap />

                {selectedSeats.length > 0 && (
                    <div className="booking-selected">
                        <h3>Valda platser</h3>
                        {selectedSeats.map((seat, index) => (
                            <div key={index} className="booking-seat-row">
                                <span>Rad {seat.row}, Stol {seat.number}, Salong 1</span>
                                <span>129 kr</span>
                            </div>
                        ))}
                        <button className="booking-clear" onClick={clearSeats}>
                            Avmarkera platser
                        </button>
                    </div>
                )}

                <div className="booking-payment">
                    <h2>Betalning</h2>
                    <label className={`payment-option ${paymentMethod === "swish" ? "active" : ""}`}>
                        <input
                            type="radio"
                            name="payment"
                            value="swish"
                            checked={paymentMethod === "swish"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Swish
                    </label>
                    <label className={`payment-option ${paymentMethod === "klarna" ? "active" : ""}`}>
                        <input
                            type="radio"
                            name="payment"
                            value="klarna"
                            checked={paymentMethod === "klarna"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Klarna
                    </label>
                    <button className="booking-submit" onClick={handleSubmit}>
                        Slutför köp
                    </button>
                </div>
            </div>

            <div className="booking-right">
                {movie && (
                    <>
                        <p className="booking-movie-label">Bokare</p>
                        <h2 className="booking-movie-title">{movie.title}</h2>
                        <img
                            className="booking-movie-img"
                            src={movie.portraitImg}
                            alt={movie.title}
                        />
                        <div className="booking-movie-info">
                            <span>📅 {movie.released}</span>
                            <span>⏱ {movie.runtime}</span>
                            <span>👤 {movie.age}</span>
                        </div>
                    </>
                )}
                <div className="booking-summary">
                    <p>Summa</p>
                    <h3>{getTotalPrice()} kr</h3>
                </div>
            </div>
        </div>
    );
}

export default Booking;