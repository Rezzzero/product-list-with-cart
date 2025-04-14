import { DessertType } from "../../types/types";
import OrderConfirmedIcon from "/images/icon-order-confirmed.svg";

export const OrderModal = ({
  cart,
  startNewOrder,
}: {
  cart: DessertType[];
  startNewOrder: () => void;
}) => {
  const listOfUniqueDesserts = [...new Set(cart.map((item) => item.name))];

  const getImage = (name: string) => {
    return cart.filter((item) => item.name === name)[0].image.tablet;
  };

  const getCount = (name: string) => {
    return cart.filter((item) => item.name === name).length;
  };

  const getPrice = (name: string) => {
    return cart.filter((item) => item.name === name)[0].price;
  };

  return (
    <div>
      <div className="absolute bg-black top-0 left-0 w-full h-screen opacity-50"></div>
      <div className="absolute bg-white top-25 left-0 w-full rounded-xl p-5 pt-8">
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
                src={getImage(dessert)}
                alt="dessert image"
                className="w-12 h-10 mr-3"
              />
              <div className="flex flex-col">
                <h1>{dessert}</h1>
                <span className="flex text-gray-400 gap-1 items-end text-sm font-semibold">
                  <p className="text-red-700 text-base mr-1">
                    {getCount(dessert)}x
                  </p>{" "}
                  @
                  <p className="text-gray-400 text-base">
                    ${getPrice(dessert).toFixed(2)}
                  </p>
                </span>
              </div>
              <p className="ml-auto">
                ${(getCount(dessert) * getPrice(dessert)).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <span className="flex justify-between items-center px-5 text-gray-500 font-semibold mb-12">
          Order total{" "}
          <p className="font-bold text-black text-2xl">
            ${cart.reduce((acc, dessert) => acc + dessert.price, 0).toFixed(2)}
          </p>
        </span>
        <button
          type="button"
          onClick={startNewOrder}
          className="w-full py-3 bg-red-700 text-white rounded-full font-semibold"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};
