import { useParams } from "react-router";

//Components
import DetailsPage from "../components/Footer/Details/DetailsPage";
import ShowtimePicker from '../components/ShowtimePicker/ShowtimePicker.jsx';

function MovieDetails() {
    const { id } = useParams();

    return (
        <>
            <DetailsPage />
            <ShowtimePicker movieId={id} />
        </>
    )
}

export default MovieDetails;