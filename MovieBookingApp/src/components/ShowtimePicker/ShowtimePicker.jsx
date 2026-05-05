import { useEffect, useState } from 'react';
import { showtimesData } from '../../services/movieData.js';
import useBookingStore from '../../stores/bookingStore.js';
import useCitiesStore from "../../stores/citiesStore.js";

import SelectableCard from '../SelectableCard/SelectableCard.jsx'
import './ShowtimePicker.css';

function ShowtimePicker({ movieId }) {
    const showtime = useBookingStore((state) => state.showtime);
    const setShowtime = useBookingStore((state) => state.setShowtime);

    const activeCity = useCitiesStore((state) => state.activeCity);

    const idNum = Number.parseInt(movieId);
    const movie = showtimesData.filter((e) => e.movieId === idNum && e.cityId === activeCity);

    if (movie.length === 0) {
        return <p>No showtimes found</p>
    }

    const [activeDate, setActiveDate] = useState(movie[0].id);
    const [activeShowtime, setActiveShowtime] = useState(0);

    useEffect(() => {
        setActiveDate(movie[0].id);
        setActiveShowtime(0);
        setShowtime(movie[0].day, movie[0].date, movie[0].times[0]);
    }, [activeCity]);

    const dateStyling = (id) => `card ${activeDate === id ? "active" : ""}`;
    const showtimeStyling = (id) => `card ${activeShowtime === id ? "active" : ""}`;

    const findTimesArray = () => movie.find((e) => e.id === activeDate)?.times ?? [];
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
        </div>
    )
}

export default ShowtimePicker;