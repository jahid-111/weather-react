import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";
// eslint-disable-next-line react/prop-types
const FavoriteProvider = ({ children }) => {
  //  Noted :  BUG ( Solved )

  const [favorites, setFavorite] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorite([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavorites = () => {
    const restFav = favorites.filter((fav) => fav.location === location);
    setFavorite(restFav);
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFromFavorites, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider };
