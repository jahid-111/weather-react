

import HeartFav from "../../assets/heart-red.svg"

const Favourite = () => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={HeartFav} alt="" />
        <span>Favourite Locations </span>
      </div>
    </div>
  );
};

export default Favourite;