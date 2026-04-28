//Hooks
import { useState } from 'react'
import useFormInput from '../hooks/useFormInput.js'
import useValidator from '../hooks/useValidator.js'

//Zustand
import useBookingStore from '../stores/bookingStore.js'

//Components
import Input from '../components/InputField/Input.jsx'
import Button from '../components/Button/Button.jsx'
import TicketPicker from '../components/TicketPicker/TicketPicker.jsx'
import MovieCard from '../components/MovieCard/MovieCard.jsx'

import './Booking.css'

function Booking() {
    const tickets = useBookingStore((state) => state.tickets);
    const showtime = useBookingStore((state) => state.showtime);
    const getSum = useBookingStore((state) => state.getSum);

    //Skapas genom custom hooks
    const email = useFormInput("");
    //const error = useValidator();

    const [error, setError] = useState(null);

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
    }

    return (
        <>
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
        </>
    )
}

export default Booking;