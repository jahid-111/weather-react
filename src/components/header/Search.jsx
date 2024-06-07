import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationContext);

  function handleSubmit(e) {
    e.preventDefault();
    const fetchLocation = getLocationByName(searchTerm);
    setSelectedLocation({ ...fetchLocation });
  }

  // console.log(searchTerm);
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            required
          />
          <button type="submit">
            <img src={SearchIcon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
