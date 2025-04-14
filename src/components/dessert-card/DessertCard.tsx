import { DessertCardType } from "../../types/types";
import AddIcon from "/images/icon-add-to-cart.svg";
import DecrementIcon from "/images/icon-decrement-quantity.svg";
import IncrementIcon from "/images/icon-increment-quantity.svg";

export const DessertCard = ({
  data,
  cart,
  addToCart,
  removeFromCart,
}: DessertCardType) => {
  const count = cart.filter((item) => item.name === data.name).length;
  const windowWidth = window.innerWidth;
  return (
    <div className="flex flex-col relative lg:font-bold">
      <img
        src={windowWidth > 1024 ? data.image.desktop : data.image.mobile}
        alt="image"
        className={`mb-8 ${
          count > 0 ? "border-2 border-red-700" : ""
        } rounded-md lg:w-[250px] lg:h-[200px]`}
      />
      <p className="text-sm text-gray-400">{data.category}</p>
      <p>{data.name}</p>
      <p className="text-red-700 font-semibold">${data.price.toFixed(2)}</p>
      <div
        className={`${
          count > 0 ? "bg-red-700" : "bg-white"
        } w-[164px] border-1 border-red-700 absolute bottom-20 left-1/2 -translate-x-1/2 py-2 font-semibold rounded-full`}
      >
        {cart.some((item) => item.name === data.name) ? (
          <div className="flex justify-between items-center px-3">
            <button
              type="button"
              onClick={removeFromCart}
              className="flex items-center justify-center h-4 w-4 border-2 border-white rounded-full cursor-pointer"
            >
              <img src={DecrementIcon} alt="decrement icon" />
            </button>
            <p className="text-white">{count}</p>
            <button
              type="button"
              onClick={addToCart}
              className="flex items-center justify-center h-4 w-4 border-2 border-white rounded-full cursor-pointer"
            >
              <img src={IncrementIcon} alt="increment icon" />
            </button>
          </div>
        ) : (
          <div
            className="flex gap-2 px-6 lg:gap-1 lg:font-bold cursor-pointer"
            onClick={addToCart}
          >
            <img src={AddIcon} alt="add icon" />
            <span>Add to cart</span>
          </div>
        )}
      </div>
    </div>
  );
};
