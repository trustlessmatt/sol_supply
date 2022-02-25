import BellIcon from "./assets/BellIcon";
import MenuIcon from "./assets/MenuIcon";

const Header = () => {
  return (
    <div className="px-5 overflow-auto">
      <div className="bg-sol_black m-5 rounded-sm shadow-lg py-2 px-5">
        {/* flex container */}
        <div className="flex justify-between items-center">
          {/* left side */}
          <div className="flex text-white">
            <p>solsupply</p>
          </div>

          {/* right side */}
          <div className="flex space-x-4">
            <BellIcon />
            <MenuIcon />
            {/* <img src={menu} alt="menu" className="w-4 h-5" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
