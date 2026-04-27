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

    // Sätt initialt värde endast en gång när komponenten mountas
    useEffect(() => {
        setShowtime(movie[0].day, movie[0].date, movie[0].times[0]);
    }, []);

    //Felhantering - om arrayen är tom stoppas komponenten här
    if (movie.length === 0) {
        return <p>Inga tider hittades</p>
    }

    //Håller på vad användaren har valt
    //movie[0].id sätter första visnings datumet för filmen som aktiv
    const [activeDate, setActiveDate] = useState(movie[0].id);
    const [activeShowtime, setActiveShowtime] = useState(0);

    //console.log(`activeDate: ${activeDate}, type of: ${typeof activeDate} \n activeShowtime: ${activeShowtime}, type of: ${typeof activeShowtime}`);

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