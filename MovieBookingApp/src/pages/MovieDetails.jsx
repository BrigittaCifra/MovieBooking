import { useParams } from "react-router";
import { useState } from "react";

//Components
import DetailsPage from "../components/Footer/Details/DetailsPage";
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';
import TicketPicker from "../components/TicketPicker/TicketPicker.jsx";

function MovieDetails() {
    const { id } = useParams();
    const [ticket, setTicket] = useState(0);

    return (
        <>
            <DetailsPage />
            <ShowtimePicker movieId={id} />
            <TicketPicker ticket={ticket} />
        </>
    )
}

export default MovieDetails;