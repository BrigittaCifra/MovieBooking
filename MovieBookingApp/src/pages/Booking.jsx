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
    const error = useValidator();

    const handleSubmit = (e) => {
        e.preventDefault();
        validate(email.value);
        //setSubmitted(true);
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h2>Log in to start earning points</h2>
                <Button text="Log in" type="primary medium" />
                <h2>Contact info</h2>
                <Input
                    type="email"
                    label="Email"
                    id="email"
                    value={email.value}
                    // error={error}
                    onChange={email.onChange}
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
                    type="primary medium"
                    text="Purchase"
                />
            </form>
        </>
    )
}

export default Booking;