//Hooks
import { useState } from "react";
import useCitiesStore from "../../stores/citiesStore.js";

//Components
import Button from '../Button/Button.jsx';
import { menuCloseIcon } from '../Icons.jsx';

//css
import './LocationSelectorWidget.css'

function LocationSelectorWidget() {
    const cities = useCitiesStore((state) => state.cities);

    const [active, setActive] = useState(cities[0]);

    const activeCity = cities.find((e) => e === active);

    return (
        <div className="location-widget">
            {cities.map((e) => (
                <Button
                    key={e}
                    text={e}
                    btnType={e === active ? 'primary' : 'secondary'}
                    onClick={() => {
                        setActive(e);
                    }}
                />
            ))}
        </div >
    )
}

export default LocationSelectorWidget;

