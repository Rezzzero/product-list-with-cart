import { DessertType } from "../types/types";

export const getCount = (name: string, cart: DessertType[]) => {
  return cart.filter((item) => item.name === name).length;
};

export const getPrice = (name: string, cart: DessertType[]) => {
  return cart.filter((item) => item.name === name)[0].price;
};

export const getImage = (name: string, cart: DessertType[]) => {
  return cart.filter((item) => item.name === name)[0].image.tablet;
};

export const getTotal = (cart: DessertType[]) => {
  return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
};
