import { useEffect, useState } from 'react';
import { showtimesData } from '../../services/movieData.js';
import useBookingStore from '../../stores/bookingStore.js';
//import useMovieStore from "../../stores/favoritesStore.js";
import './ShowtimePicker.css';

//Components
import SelectableCard from '../SelectableCard/SelectableCard.jsx'

//React router kommer ersätta propen i en senare uppdatering
function ShowtimePicker({ movieId = "1" }) {
    const showtime = useBookingStore((state) => state.showtime);
    const setShowtime = useBookingStore((state) => state.setShowtime);

    //React router skickar params som strängar
    const idNum = Number.parseInt(movieId);
    //Hämtar showtimesData för en film baserat på movieId
    const movie = showtimesData.filter((e) => e.movieId === idNum);

    //Felhantering - om arrayen är tom stoppas komponenten här
    if (movie.length === 0) {
        return <p>Inga tider hittades</p>
    }

    const [activeDate, setActiveDate] = useState(() => {

        //Om det redan finns ett värde i storen
        if (showtime.day) {
            // Hittar showtimes-objektet vars day matchar det sparade värdet i storen
            const match = movie.find((e) => e.day === showtime.day);
            return match.id;
        }
        // Första gången, sätter ett initialt värde
        setShowtime(movie[0].day, movie[0].date, movie[0].times[0]);
        return movie[0].id;

    });

    const [activeShowtime, setActiveShowtime] = useState(() => {

        //Om det redan finns ett värde i storen
        if (showtime.time) {
            // Hitta dagen som matchar storen, leta sedan efter indexet för den sparade tiden
            const currentDay = movie.find((e) => e.day === showtime.day);
            return currentDay.times.findIndex((e) => e === showtime.time);
        }
        return 0;

    });

    //Sätter en aktiv css klass på aktiva komponenten
    const dateStyling = (id) => `card ${activeDate === id ? "active" : ""}`;
    const showtimeStyling = (id) => `card ${activeShowtime === id ? "active" : ""}`;

    //Hämtar ut alla visningstider för det aktiva datumet
    const findTimesArray = () => movie.find((e) => e.id === activeDate).times;
    //Hämtar ut den valda visningstiden 
    const findActiveDate = () => movie.find((e) => e.id === activeDate);

    return (
        <div className='showtime-picker'>
            <h2>Showtime picker</h2>
            <div>
                <h3>Date</h3>
                <div className='date'>
                    {/* Loopar igenom showtimesData arrayen */}
                    {movie.map((e) => (
                        <SelectableCard
                            key={e.id}
                            onClick={() => {
                                setActiveDate(e.id);
                                setActiveShowtime(0);
                                setShowtime(e.day, e.date, e.times[0]);
                            }}
                            type={dateStyling(e.id)}
                            span={e.date}
                            text={e.day}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h3>Showtime</h3>
                {/* Loopar igenom showtimesData arrayen */}
                <div className='showtime'>
                    {findTimesArray().map((e, index) => (
                        <SelectableCard
                            key={index}
                            onClick={() => {
                                setActiveShowtime(index);
                                setShowtime(findActiveDate().day, findActiveDate().date, e);
                            }}
                            text={e}
                            type={showtimeStyling(index)}
                        />
                    ))}
                </div>
            </div>
        </div >
    )

}

export default ShowtimePicker;