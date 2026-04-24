import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import './MovieDetails.css';

//Components
import DetailsPage from "../components/Details/DetailsPage.jsx";
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';
import TicketPicker from "../components/TicketPicker/TicketPicker.jsx";
import Button from "../components/Button/Button.jsx";

function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <DetailsPage />
            <section className='booking-details'>
                <ShowtimePicker movieId={id} />
                <TicketPicker />
                <Button
                    text="Book tickets"
                    type="primary medium"
                    onClick={() => navigate("/Booking")}
                />
            </section>
        </>
    )


}

export default MovieDetails;