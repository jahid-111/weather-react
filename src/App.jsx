// eslint-disable-next-line no-unused-vars
import React from "react";
import Page from "./Page";
import LocationProvider from "./provider/LocationProvider";
import WeatherProvider from "./provider/WeatherProvider";
import { FavoriteProvider } from "./provider/FavoriteProvider";

const App = () => {
  return (
    <div>
      <LocationProvider>
        <WeatherProvider>
          <FavoriteProvider>
            <Page></Page>
          </FavoriteProvider>
        </WeatherProvider>
      </LocationProvider>
    </div>
  );
};

export default App;
