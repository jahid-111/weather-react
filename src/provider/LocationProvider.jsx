import { useState } from "react";
import { LocationContext } from "../context";

// eslint-disable-next-line react/prop-types
const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitute: 0,
    longitute: 0,
  });
  // console.log(selectedLocation);
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
