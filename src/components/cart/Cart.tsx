import { DessertType } from "../../types/types";
import emptyCart from "/images/illustration-empty-cart.svg";
import removeItem from "/images/icon-remove-item.svg";
import carbonNeutralIcon from "/images/icon-carbon-neutral.svg";
import { getCount, getPrice, getTotal } from "../../utils/utils";

export const Cart = ({
  cart,
  removeFromCart,
  confirmOrder,
}: {
  cart: DessertType[];
  removeFromCart: (name: string) => void;
  confirmOrder: () => void;
}) => {
  const listOfUniqueDesserts = [...new Set(cart.map((item) => item.name))];

  return (
    <div className="flex flex-col px-6 lg:w-[370px] lg:my-8">
      <h1 className="text-2xl font-bold text-red-700 mb-10 lg:mb-3">
        Your Cart ({cart.length})
      </h1>
      {cart.length === 0 ? (
        <>
          <img
            src={emptyCart}
            alt="empty cart icon"
            className="w-25 h-26 mx-auto mb-3"
          />
          <p className="text-gray-400 text-sm font-semibold mx-auto">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-5 mb-10">
            {listOfUniqueDesserts.map((dessert) => (
              <div key={dessert} className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="font-semibold">{dessert}</h1>
                  <div className="flex gap-2 font-semibold">
                    <p className="text-red-700 font-semibold">
                      {getCount(dessert, cart)}x
                    </p>
                    <span className="flex items-end gap-1 text-gray-400 text-sm">
                      @
                      <p className="text-gray-500 text-base">
                        ${getPrice(dessert, cart).toFixed(2)}
                      </p>
                    </span>
                    <p className="text-gray-700">
                      ${getCount(dessert, cart) * getPrice(dessert, cart)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(dessert)}
                  className="flex items-center justify-center h-5 w-5 border-2 border-gray-300 rounded-full cursor-pointer"
                >
                  <img src={removeItem} alt="remove item" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-12">
            <span className="flex justify-between items-center text-gray-500 font-semibold">
              Order total{" "}
              <p className="font-bold text-black text-2xl">${getTotal(cart)}</p>
            </span>
            <div className="flex justify-center gap-2 text-gray-600">
              <img src={carbonNeutralIcon} alt="carbon neutral icon" />
              <p className="font-semibold">
                This is <b>carbon-neutral</b> delivery
              </p>
            </div>
            <button
              type="button"
              onClick={confirmOrder}
              className="w-full py-3 bg-red-700 text-white rounded-full font-semibold cursor-pointer"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};
