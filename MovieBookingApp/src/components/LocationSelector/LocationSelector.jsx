import { useState, useRef, useEffect } from "react";
import "./LocationSelector.css";

function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const containerRef = useRef(null);

  const cities = ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås", "Umeå"];

  function handleSelectCity(city) {
    setSelectedCity(city);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="location-selector" ref={containerRef}>
      <div
        className="location-text"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCity || "Select location"}
      </div>

      {isOpen && (
        <ul className="location-dropdown">
          {cities.map((city) => (
            <li
              key={city}
              className="location-item"
              onClick={() => handleSelectCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LocationSelector;