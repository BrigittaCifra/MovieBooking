import { useState } from 'react'
import './Booking.css'

import useBookingStore from '../../stores/bookingStore.js'

//Components
import Input from '../../components/InputField/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import TicketPicker from '../../components/TicketPicker/TicketPicker.jsx'
import MovieCard from '../../components/MovieCard/MovieCard.jsx'

function Booking() {
    const tickets = useBookingStore((state) => state.tickets);
    const showtime = useBookingStore((state) => state.showtime);
    const getSum = useBookingStore((state) => state.getSum);

    console.log(showtime);

    return (
        <>
            <section className='booking-details'>
                <Button text="Log in" type="primary medium" />
                <h2>Select seats</h2>
                <h2>Contact info</h2>
                <Input
                    label="Email"
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
            </section>

        </>
    )
}

export default Booking;