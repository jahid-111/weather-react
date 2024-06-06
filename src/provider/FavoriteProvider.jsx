import { FavoriteContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";
const FavoriteProvider = ({ clildren }) => {
  const [favorites, setFavorite] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorite(...favorites, { latitude, longitude, location });
  };

  const removeFromFavorites = () => {
    const restFav = favorites.filter((fav) => fav.location !== location);

    setFavorite(restFav);
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFromFavorites, favorites }}
    >
      {clildren}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
