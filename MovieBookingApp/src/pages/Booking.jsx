//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import useFormInput from '../hooks/useFormInput.js'

//Zustand
import useBookingStore from '../stores/bookingStore.js'
import useMoviesStore from "../stores/moviesStore";

//Components
import Input from '../components/InputField/Input.jsx'
import Button from '../components/Button/Button.jsx'
import TicketPicker from '../components/TicketPicker/TicketPicker.jsx'
import MovieCard from '../components/MovieCard/MovieCard.jsx'
import SeatMap from "../components/SeatMap/SeatMap";

import './Booking.css'

function Booking() {
    const { id } = useParams();

    //Movie store
    const getMovieById = useMoviesStore((state) => state.getMovieById);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);
    const movie = getMovieById(Number(id));

    //Booking store
    const { selectedSeats, clearSeats, getTotalPrice, tickets, showtime, getSum } = useBookingStore();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    //Skapas genom custom hooks
    const email = useFormInput("");
    const [error, setError] = useState(null);

    //Hanterar validering när användaren lämnar input fälltet
    const handleBlur = (e) => {
        if (!e.target.value || e.target.value.trim().length === 0) {
            setError("Email is required");
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
            setError("Invalid email address");
            return;
        }

        setError(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedSeats.length === 0) return alert("Välj minst en plats!");
        if (!paymentMethod) return alert("Välj betalningsmetod!");
        setIsSubmitted(true);
        clearSeats();
    }

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
                <form action="" onSubmit={handleSubmit}>
                    <h2>Log in to start earning points</h2>
                    <Button
                        btnType="primary medium"
                        text="Log in"
                    />
                    <h2>Contact info</h2>
                    <Input
                        type="email"
                        label="Email"
                        id="email"
                        value={email.value}
                        onChange={email.onChange}
                        onBlur={handleBlur}
                        error={error}
                    />

                    <h2>Payment</h2>
                    <Input label="Add a voucher" />

                    <h2>Booking details</h2>
                    <p>Tickets:</p>
                    {tickets.map((e) =>
                        e.amount > 0 &&
                        <div key={e.id}>
                            <p>{e.age}</p>
                            <p>{e.amount} x {e.price}</p>
                        </div>
                    )}

                    <div>
                        <p>Date:</p>
                        <p>{showtime.day}</p>
                        <p>{showtime.date}</p>
                        <p>{showtime.time}</p>
                    </div>

                    <span>Total</span>
                    <h2>{getSum()}</h2>
                    <Button
                        btnType="primary medium"
                        text="Purchase"
                        type="Submit"
                        disabled={!!error || !email.value}
                    />
                </form>
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
    )
}

export default Booking;