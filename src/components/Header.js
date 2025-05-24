import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using a selector

  const cartItems = useSelector((store)=>store.cart.items)
  
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 object-contain" src={LOGO_URL} alt="App Logo" />
        <span className="text-xl font-semibold text-gray-800 tracking-wide">FoodZone</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-8 text-gray-700 font-medium">
        <span className="text-sm text-green-600">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </span>
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
        <Link to="/grocery" className="hover:text-blue-600 transition-colors">Grocery</Link>
        <Link to="/cart" className="hover:text-blue-600 cursor-pointer">🛒 ({cartItems.length} items)</Link>

        {/* Login Button */}
        <button
          onClick={() =>
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {btnNameReact}
        </button>
        <h4 className="text-gray-800 font-medium ml-2 whitespace-nowrap">{loggedInUser}</h4>

      </nav>
    </header>
  );
};

export default Header;
