import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartQuantity, getCartTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity);
  const cartTotalPrice = useSelector(getCartTotalPrice);
  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(cartTotalPrice)}</span>
      </p>
      <Link to="/react-pizza-app/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
