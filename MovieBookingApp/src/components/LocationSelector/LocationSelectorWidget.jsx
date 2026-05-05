//Hooks
import { useState } from "react";
import useCitiesStore from "../../stores/citiesStore.js";
import { useParams } from "react-router";

import { showtimesData } from '../../services/movieData.js';

//Components
import Button from '../Button/Button.jsx';

//css
import './LocationSelectorWidget.css'

function LocationSelectorWidget() {
    const { id } = useParams();

    const cities = useCitiesStore((state) => state.cities);
    const activeCity = useCitiesStore((state) => state.activeCity);
    const setActiveCity = useCitiesStore((state) => state.setActiveCity);

    //React router skickar params som strängar
    const idNum = Number.parseInt(id);
    //Hämtar showtimesData för en film baserat på movieId
    const movie = showtimesData.filter((e) => e.movieId === idNum);

    //Hittar tillgänliga städer
    const cityIds = movie.map((e) => e.cityId);
    const availableCities = cities.filter((city) => cityIds.includes(city.id));

    //Felhantering - om arrayen är tom stoppas komponenten här
    if (availableCities.length === 0) {
        return <p>No cities found</p>
    }

    return (
        <div className="location-widget">
            {availableCities.map((e) => (
                <Button
                    key={e.id}
                    text={e.name}
                    btnType={e.id === activeCity ? 'primary' : 'secondary'}
                    onClick={() => {
                        setActiveCity(e.id);
                    }}
                />
            ))}
        </div >
    )
}

export default LocationSelectorWidget;

