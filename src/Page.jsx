import Header from "./components/header/Header";
import Main from "./components/main/WeatherBoard";
import { FavoriteProvider } from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";
import LocationProvider from "./provider/LocationProvider";
// import { getLocations } from "./data/location-data";

const Page = () => {
  // console.log(getLocations())
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <div>
              <Header></Header>
              <main className=" grid place-items-center  h-screen">
                <section>
                  <Main> </Main> {/*WeatherBoard*/}
                </section>
              </main>
            </div>
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
};

export default Page;
