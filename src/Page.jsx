import Header from "./components/header/Header";
import Main from "./components/main/WeatherBoard";
import { FavoriteProvider } from "./provider/FavoriteProvider";
import WeatherProvider from "./provider/WeatherProvider";

const Page = () => {
  return (
    <>
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
    </>
  );
};

export default Page;
