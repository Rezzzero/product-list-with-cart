import { DessertCardType } from "../../types/types";
import AddIcon from "/images/icon-add-to-cart.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";

export const DessertCard = ({
  name,
  cart,
  category,
  price,
  image,
  addToCart,
  removeFromCart,
}: DessertCardType) => {
  const count = cart.filter((item) => item.name === name).length;
  return (
    <div className="flex flex-col relative">
      <img
        src={image}
        alt="image"
        className={`mb-8 ${
          count > 0 ? "border-2 border-red-700" : ""
        } rounded-md`}
      />
      <p className="text-sm text-gray-400">{category}</p>
      <p>{name}</p>
      <p className="text-red-700 font-semibold">${price.toFixed(2)}</p>
      <div
        className={`${
          count > 0 ? "bg-red-700" : "bg-white"
        } w-[164px] border-1 border-red-700 absolute bottom-20 left-1/2 -translate-x-1/2 py-2 font-semibold rounded-full`}
      >
        {cart.some((item) => item.name === name) ? (
          <div className="flex justify-between items-center px-3">
            <button
              type="button"
              onClick={removeFromCart}
              className="flex items-center justify-center h-4 w-4 border-2 border-white rounded-full"
            >
              <img src={DecrementIcon} alt="decrement icon" />
            </button>
            <p className="text-white">{count}</p>
            <button
              type="button"
              onClick={addToCart}
              className="flex items-center justify-center h-4 w-4 border-2 border-white rounded-full"
            >
              <img src={IncrementIcon} alt="increment icon" />
            </button>
          </div>
        ) : (
          <div className="flex gap-2 px-6" onClick={addToCart}>
            <img src={AddIcon} alt="add icon" />
            <span>Add to cart</span>
          </div>
        )}
      </div>
    </div>
  );
};
