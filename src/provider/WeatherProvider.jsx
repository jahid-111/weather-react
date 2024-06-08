import { WeatheContext } from "../context";
import useWeather from "../hooks/useWeather";

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading } = useWeather();
  // console.log(weatherData)

  return (
    <WeatheContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatheContext.Provider>
  );
};

export default WeatherProvider;
