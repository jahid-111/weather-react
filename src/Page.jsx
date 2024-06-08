import Header from "./components/header/Header";
import Main from "./components/main/WeatherBoard";
import { useContext } from "react";
import { WeatheContext } from "./context";

// import { getLocations } from "./data/location-data";

const Page = () => {
  const { loading } = useContext(WeatheContext);
  console.log(" Log Pages", loading.message);

  return (
    <>
      {loading.state ? (
        <div>
          <Header></Header>
          <main className=" grid place-items-center  h-screen">
            <section>
              <Main> </Main> {/*WeatherBoard*/}
            </section>
          </main>
        </div>
      ) : (
        <div>
          <p className=" h-screen grid place-items-center text-5xl font-semibold bg-gray-300">
            {loading.message}
          </p>
        </div>
      )}
    </>
  );
};

export default Page;
