//Hooks
import { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import useFormInput from '../hooks/useFormInput.js'

//Zustand
import useBookingStore from '../stores/bookingStore.js';
import useMoviesStore from "../stores/moviesStore.js";
import useCitiesStore from "../stores/citiesStore.js";

//Components
import Input from '../components/InputField/Input.jsx'
import Button from '../components/Button/Button.jsx'
import TicketPicker from '../components/TicketPicker/TicketPicker.jsx'
import MovieCard from '../components/MovieCard/MovieCard.jsx'
import SeatMap from "../components/SeatMap/SeatMap.jsx";

//CSS
import './Booking.css'

function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();

    //Movie store
    const getMovieById = useMoviesStore((state) => state.getMovieById);
    const fetchMovies = useMoviesStore((state) => state.fetchMovies);
    const movies = useMoviesStore((state) => state.movies);
    const movie = getMovieById(Number(id));

    //Booking store
    const { selectedSeats, clearSeats, getTotalPrice, tickets, showtime, getSum } = useBookingStore();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Cities store
    const activeCity = useCitiesStore((state) => state.activeCity);
    const cities = useCitiesStore((state) => state.cities);

    const cityName = () => cities.find((e) => e.id === activeCity).name;

    useEffect(() => {
        if (movies.length === 0) {
            fetchMovies();
        }
    }, []);

    //Skapas genom custom hooks
    const email = useFormInput("");
    const [error, setError] = useState(null);

    const handleCancel = () => {
        navigate(-1);
    };

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
        if (selectedSeats.length === 0) return alert("You must choose at least one seat!");
        if (!paymentMethod) return alert("Please select a payment method!");
        setIsSubmitted(true);
        clearSeats();
    }

    //Boknings bekräftelse 
    if (isSubmitted) {
        return (
            <div className="booking-success">
                <h2>Thank you for your booking! 🎬</h2>
                <p>Your tickets are booked. Enjoy your movie night!</p>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <div className="booking-left">

                <div>
                    <h2>Log in to start earning points</h2>
                    <Button
                        btnType="primary medium"
                        text="Log in"
                    />

                </div>

                <div>
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
                </div>

                <div>
                    <h1 className="booking-title">Choose Tickets</h1>
                    <SeatMap />
                    {selectedSeats.length > 0 && (
                        <div className="booking-selected">
                            <h3>Selected Seats</h3>
                            {selectedSeats.map((seat, index) => (
                                <div key={index} className="booking-seat-row">
                                    <span>Row {seat.row}, Seat {seat.number}, Hall 1</span>
                                    <span>129 kr</span>
                                </div>
                            ))}
                            <button className="booking-clear" onClick={clearSeats}>
                                Clear seats
                            </button>
                        </div>
                    )}
                </div>

                <div className="booking-payment">
                    <h2>Payment</h2>
                    <Input label="Add a voucher" />
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
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <div className="booking-buttons">
                        <Button
                            btnType="primary medium"
                            text="Purchase"
                            type="Submit"
                            disabled={error || !email.value}
                        />
                        <Button
                            btnType="primary medium"
                            text="Cancel"
                            type="button"
                            onClick={handleCancel}
                        />
                    </div>
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
                        <div className="booking-summary booking-movie-info">
                            <span>📍 {cityName()}</span>
                            <span>📅 {showtime.date}, {showtime.day + " " + showtime.time}</span>
                            <div className='booking-tickets'>
                                <span>👤 </span>
                                <div>
                                    {tickets.map((e) =>
                                        e.amount > 0 &&
                                        <div key={e.id}>
                                            <span>{e.age} </span>
                                            <span>x {e.amount}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="booking-summary">
                    <p>Total</p>
                    {/* Utgår från att priset sätt utifrån sätten*/}
                    <h3>{getTotalPrice()} kr</h3>
                </div>
            </div>
        </div>
    )
}

export default Booking;