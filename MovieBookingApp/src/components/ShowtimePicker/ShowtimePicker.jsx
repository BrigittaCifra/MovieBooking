import { useState } from 'react';
import { showtimesData } from '../../services/movieData.js';
import './ShowtimePicker.css';

console.log(showtimesData);

function ShowtimePicker() {
    const [active, setActive] = useState(1);

    return (
        <div className='showtime-picker'>
            <h2>Showtime picker</h2>
            <div>
                {/* Loopar igenom showtimesData arrayen */}
                {showtimesData.slice(0, 5).map((e) => (
                    <button
                        key={e.id}
                        onClick={() => setActive(e.id)}
                        className={active === e.id ? "active" : "inactive"}
                    >{e.day}
                    </button>
                ))}
            </div>
            <div>
                {/* Loopar igenom showtimesData arrayen */}
                {showtimesData.find(e => e.id === active).times.map((e, index) => (
                    <button key={index}>{e}</button>
                ))}
            </div>
        </div >
    )

}

export default ShowtimePicker;

//{ id: 1, movieId: 1, day: "monday", times: ["14:00", "17:00"] }

//