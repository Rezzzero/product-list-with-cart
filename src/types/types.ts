export interface DessertType {
  name: string;
  category: string;
  price: number;
  image: {
    mobile: string;
  };
}

export interface DessertCardType {
  name: string;
  cart: DessertType[];
  category: string;
  price: number;
  image: string;
  addToCart: () => void;
  removeFromCart: () => void;
}
