import { useContext, useEffect, useState } from "react";
import { FavoriteContext, WeatheContext } from "../../context";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";

const FavLocation = () => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatheContext);
  const { latitude, longitude, location } = weatherData;
  const [isfavorites, setFavorites] = useState(false);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location); //Find From LocalStorage
    setFavorites(found);
  }, [favorites, location]);
  function handleAddFavorites() {
    const found = favorites.find((fav) => fav.location === location); //Find From LocalStorage
    console.log(found);
    if (!found) {
      //Add To Fav
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    setFavorites(!isfavorites);
  }

  return (
    <div>
      <div className="md:col-span-2 ">
        <div className="flex items-center justify-end space-x-6">
          <button
            onClick={handleAddFavorites}
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          >
            <span>Add to Favourite</span>
            <img src={isfavorites ? RedHeartIcon : HeartIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavLocation;
