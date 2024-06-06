import { useState } from "react";
import FavListModal from "./FavListModal";
import Favourite from "./Favourite";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const [showFavMoal, setFavModal] = useState(false);
  return (
    <div>
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <Logo></Logo>
          <div className="flex items-center gap-4 relative">
            <Search></Search>
            <Favourite onShow={() => setFavModal(!showFavMoal)}></Favourite>
            {showFavMoal && <FavListModal></FavListModal>}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
