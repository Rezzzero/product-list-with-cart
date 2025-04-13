import { DessertCardType } from "../../types/types";
import AddIcon from "/images/icon-add-to-cart.svg";

export const DessertCard = ({
  name,
  cart,
  category,
  price,
  image,
  addToCart,
}: DessertCardType) => {
  return (
    <div className="flex flex-col relative">
      <img src={image} alt="image" className="mb-8" />
      <p className="text-sm text-gray-400">{category}</p>
      <p>{name}</p>
      <p className="text-red-600 font-semibold">${price}</p>
      <button
        type="button"
        onClick={addToCart}
        className="flex gap-2 bg-white border-2 border-red-700 absolute bottom-20 left-1/2 -translate-x-1/2 py-2 px-6 font-semibold rounded-full"
      >
        {cart.some((item) => item.name === name) ? (
          <span className="text-red-600">Added</span>
        ) : (
          <>
            <img src={AddIcon} alt="add icon" />
            <span>Add to cart</span>
          </>
        )}
      </button>
    </div>
  );
};
