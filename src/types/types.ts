export interface DessertType {
  name: string;
  category: string;
  price: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface DessertCardType {
  data: DessertType;
  cart: DessertType[];
  addToCart: () => void;
  removeFromCart: () => void;
}
