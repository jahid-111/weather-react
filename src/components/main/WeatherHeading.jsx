// import CloudIcon from "../../assets/clod.svg"

import { useContext } from "react";
import LocationSvg from "../../assets/pin.svg";
import { WeatheContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";

import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import RainyIcon from "../../assets/rainy.svg";
import SunIcon from "../../assets/sun.svg";
import ThunnderIcon from "../../assets/thunder.svg";
import SnowIcon from "../../assets/icons/snow.svg";

const WeatherHeading = () => {
  const { weatherData } = useContext(WeatheContext);
  const { climate, location, temperature, time } = weatherData;
  // console.log(weatherData)

  function getWeatheIconn(climate) {
    switch (climate) {
      case "Rain":
        return RainyIcon;
      case "Cloud":
        return CloudIcon;
      case "Clear":
        return SunIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunnderIcon;
      case "Fog":
        return HazeIcon;
      case "Haze":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunIcon;
    }
  }

  return (
    <div>
      <div className="">
        <div className="max-md:flex items-center justify-between  md:-mt-10">
          <img src={getWeatheIconn(climate)} alt="cloud" />
          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {Math.round(temperature)}
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={LocationSvg} />
              <h2 className="text-2xl lg:text-[50px]">{location}</h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {" "}
          {getFormattedDate(time, "time", false)} -{" "}
          {getFormattedDate(time, "date", false)}
        </p>
      </div>
    </div>
  );
};

export default WeatherHeading;
