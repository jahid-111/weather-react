import FavLocation from "./FavLocation";
import WeatherCondition from "./WeatherCondition";
import WeatherHeading from "./WeatherHeading";

const Main = () => {
  return (
    <div>
      <div className="container ">
        <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-10 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
          <FavLocation></FavLocation>
          <div className="grid md:grid-cols-2 gap-10 md:gap-6 ">
            <WeatherHeading></WeatherHeading>
            <WeatherCondition></WeatherCondition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
