import Header from "./components/header/Header";
import Main from "./components/main/WeatherBoard";
import { useContext, useEffect, useState } from "react";
import { WeatheContext } from "./context";

import ClearSky from "./assets/backgrounds/clear-sky.jpg";
import FewClouds from "./assets/backgrounds/few-clouds.jpg";
import Mist from "./assets/backgrounds/mist.jpeg";
import RainyDay from "./assets/backgrounds/rainy-day.jpg";
import ScatteredCloud from "./assets/backgrounds/scattered-clouds.jpg";
import ShowerRain from "./assets/backgrounds/shower-rain.jpg";
import Snow from "./assets/backgrounds/snow.jpg";
import Sunny from "./assets/backgrounds/sunny.jpg";
import Thunderstorm from "./assets/backgrounds/thunderstorm.jpg";
import Winter from "./assets/backgrounds/winter.jpg";

// import { getLocations } from "./data/location-data";

const Page = () => {
  const { weatherData, loading } = useContext(WeatheContext);

  const [climateImage, setClimateImage] = useState(); //

  function get_Bg_Image(climate) {
    switch (climate) {
      case "Rain":
        return RainyDay;
      case "Clouds":
        return ScatteredCloud;
      case "Clear":
        return ClearSky;
      case "Snow":
        return Snow;
      case "Thunder":
        return Thunderstorm;
      case "Fog":
        return Winter;
      case "Haze":
        return FewClouds;
      case "Mist":
        return Mist;
      default:
        ClearSky;
    }
  }

  useEffect(() => {
    const BgImage = get_Bg_Image(weatherData.climate);
    setClimateImage(BgImage);
  }, [weatherData.climate]);

  console.log(weatherData.climate);

  return (
    <>
      {loading.state ? (
        <div className=" bg-no-repeat  bg-cover w-full " style={{ backgroundImage: `url('${climateImage}')` }}>
          <Header></Header>
          <main className=" grid place-items-center h-screen">
            <section>
              <Main> </Main> {/*WeatherBoard*/}
            </section>
          </main>
        </div>
      ) : (
        <div>
          <p className=" h-screen grid place-items-center text-5xl font-semibold bg-gray-700 text-red-400">
            {loading.message}
          </p>
        </div>
      )}
    </>
  );
};

export default Page;
