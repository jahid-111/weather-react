/* eslint-disable react/prop-types */

import HeartFav from "../../assets/heart-red.svg";

const Favourite = ({ onShow }) => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={HeartFav} alt="" />
        <span onClick={onShow}>Favourite Locations </span>
      </div>
    </div>
  );
};

export default Favourite;
