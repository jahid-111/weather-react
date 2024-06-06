import Header from "./components/header/Header";
import Main from "./components/main/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

const Page = () => {
  return (
    <WeatherProvider>
      <div>
        <Header></Header>
        <main className=" grid place-items-center  h-screen">
          <section>
            <Main> </Main> {/*WeatherBoard*/}
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
};

export default Page;
