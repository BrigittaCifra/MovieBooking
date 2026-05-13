import { useEffect, useState } from 'react';
import useBookingStore from '../../stores/bookingStore.js';
import useCitiesStore from "../../stores/citiesStore.js";

import SelectableCard from '../SelectableCard/SelectableCard.jsx'
import './ShowtimePicker.css';

function ShowtimePicker({ movieData }) {
    //Booking store
    const showtime = useBookingStore((state) => state.showtime);
    const setShowtime = useBookingStore((state) => state.setShowtime);

    //City store
    const activeCity = useCitiesStore((state) => state.activeCity);
    const setActiveCity = useCitiesStore((state) => state.setActiveCity);

    //Hämtar ut alla visningar för den aktiva staden
    const movie = movieData.showtimes.filter((e) => e.cityId === activeCity);

    // Om inga visningar finns för den aktiva staden byts den till första tillgängliga staden
    if (movie.length === 0) {
        setActiveCity(movieData.showtimes[0].cityId);
    }

    const [activeDate, setActiveDate] = useState(() => {

        if (movie.length === 0) return null;

        //Om det redan finns ett värde i storen
        if (showtime.id) {
            const match = movie.find((e) => e.id === showtime.id);
            if (match) return match.id;
        }
        // Första gången, sätter ett initialt värde
        setShowtime(movie[0].day, movie[0].date, movie[0].times[0]);
        return movie[0].id;

    });

    const [activeShowtime, setActiveShowtime] = useState(() => {

        if (movie.length === 0) return null;

        //Om det redan finns ett värde i storen
        if (showtime.time) {
            // Hitta dagen som matchar storen, leta sedan efter indexet för den sparade tiden
            const currentDay = movie.find((e) => e.id === showtime.id);
            if (currentDay) {
                return currentDay.times.findIndex((e) => e === showtime.time);
            }
        }
        return 0;

    });

    //useEffect behövs här för att kunna uppdatera activeDate och activeShowtime baserat på om activecity ändras och trigga igång en ny render
    useEffect(() => {

        //avbryter useEffect om filmen inte har visningstider för den aktiva staden
        if (movie.length === 0) return;

        //Hämtar ut movie objektet vars id matchar
        const savedDate = movie.find((e) => e.id === showtime.id);

        //Om savedDate är undefined (vilket är alltid fallet närman byter activeCity)
        if (!savedDate) {
            //Återställ det visuella datumvalet till första datumet för den nya staden (lokalt till komponenten)
            setActiveDate(movie[0].id);
            //Återställ det visuella tidsvalet till första tiden för valda datumet (lokalt till komponenten)
            setActiveShowtime(0);
            //Uppdatera booking store med den nya stadens första datum och tid 
            setShowtime(movie[0].day, movie[0].date, movie[0].times[0], movie[0].id);
            return;
        }

    }, [activeCity]);

    //Om det inte hittades visningar för den aktiva staden
    if (movie.length === 0) {
        return <p>No showtimes found</p>
    }

    //Sätter en aktiv css klass på aktiva komponenten
    const dateStyling = (id) => `card ${activeDate === id ? "active" : ""}`;
    const showtimeStyling = (id) => `card ${activeShowtime === id ? "active" : ""}`;

    //Hämtar ut alla visningstider för det aktiva datumet
    const findTimesArray = () => {
        const activeDay = movie.find((e) => e.id === activeDate);
        //Returnerar en tillfällig tom array tills useEffect körs
        if (!activeDay) return [];
        return activeDay.times;
    }
    //Hämtar ut den valda visningstiden
    const findActiveDate = () => movie.find((e) => e.id === activeDate);

    return (
        <div className='showtime-picker'>
            <h2>Showtime picker</h2>
            <div>
                <h3>Date</h3>
                <div className='date'>
                    {movie.map((e) => (
                        <SelectableCard
                            key={e.id}
                            onClick={() => {
                                setActiveDate(e.id);
                                setActiveShowtime(0);
                                setShowtime(e.day, e.date, e.times[0], e.id);
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
                <div className='showtime'>
                    {findTimesArray().map((e, index) => (
                        <SelectableCard
                            key={index}
                            onClick={() => {
                                setActiveShowtime(index);
                                setShowtime(findActiveDate().day, findActiveDate().date, e, findActiveDate().id);
                            }}
                            text={e}
                            type={showtimeStyling(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShowtimePicker;