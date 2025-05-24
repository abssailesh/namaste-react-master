import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🛒 Your Cart
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-100">
        {/* Clear Cart Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            {cartItems.length > 0 ? "Items in Cart" : "No Items"}
          </h2>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md shadow-sm transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Your cart is currently empty.</p>
            <p className="text-sm mt-2">Start adding delicious items now!</p>
          </div>
        ) : (
          // Item List
          <div className="space-y-4">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
