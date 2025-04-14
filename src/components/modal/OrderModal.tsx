import { DessertType } from "../../types/types";
import { getCount, getImage, getPrice, getTotal } from "../../utils/utils";
import OrderConfirmedIcon from "/images/icon-order-confirmed.svg";

export const OrderModal = ({
  cart,
  startNewOrder,
}: {
  cart: DessertType[];
  startNewOrder: () => void;
}) => {
  const listOfUniqueDesserts = [...new Set(cart.map((item) => item.name))];

  return (
    <div>
      <div className="absolute bg-black top-0 left-0 w-full h-screen opacity-50"></div>
      <div className="absolute bg-white top-25 left-0 w-full lg:w-[450px] lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 rounded-xl p-5 pt-8">
        <img
          src={OrderConfirmedIcon}
          alt="confirmed icon"
          className="w-10 h-10 mb-6"
        />
        <h1 className="font-bold text-[38px] max-w-[250px] leading-none mb-2">
          Order Confirmed
        </h1>
        <p className="text-gray-400 text-sm mb-10">
          We hope you enjoy your food!
        </p>
        <div className="flex flex-col gap-4 mb-12 px-5">
          {listOfUniqueDesserts.map((dessert) => (
            <div key={dessert} className="flex items-center">
              <img
                src={getImage(dessert, cart)}
                alt="dessert image"
                className="w-12 h-10 mr-3"
              />
              <div className="flex flex-col">
                <h1>{dessert}</h1>
                <span className="flex text-gray-400 gap-1 items-end text-sm font-semibold">
                  <p className="text-red-700 text-base mr-1">
                    {getCount(dessert, cart)}x
                  </p>
                  @
                  <p className="text-gray-400 text-base">
                    ${getPrice(dessert, cart).toFixed(2)}
                  </p>
                </span>
              </div>
              <p className="ml-auto">
                $
                {(getCount(dessert, cart) * getPrice(dessert, cart)).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <span className="flex justify-between items-center px-5 text-gray-500 font-semibold mb-12">
          Order total{" "}
          <p className="font-bold text-black text-2xl">${getTotal(cart)}</p>
        </span>
        <button
          type="button"
          onClick={startNewOrder}
          className="w-full py-3 bg-red-700 text-white rounded-full font-semibold cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};
