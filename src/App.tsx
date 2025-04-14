import { useState } from "react";
import { DessertCard } from "./components/dessert-card/DessertCard";
import dessertData from "./data.json";
import { DessertType } from "./types/types";
import { Cart } from "./components/cart/Cart";

function App() {
  const [data, setData] = useState(dessertData);
  const [cart, setCart] = useState<DessertType[]>([]);

  const handleAddToCart = (dessert: DessertType) => {
    setCart((prevCart) => [...prevCart, dessert]);
  };

  const handleRemoveFromCart = (name: string) => {
    const indexOfDessert = cart.findIndex((dessert) => dessert.name === name);
    if (indexOfDessert !== -1) {
      setCart(cart.filter((_, index) => index !== indexOfDessert));
    }
  };

  console.log(cart);

  return (
    <div className="container mx-auto p-5 pb-10">
      <h1 className="text-[40px] font-bold mb-5">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {data.map((dessert) => (
          <DessertCard
            key={dessert.name}
            cart={cart}
            name={dessert.name}
            category={dessert.category}
            price={dessert.price}
            image={dessert.image.mobile}
            addToCart={() => handleAddToCart(dessert)}
            removeFromCart={() => handleRemoveFromCart(dessert.name)}
          />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={() => handleRemoveFromCart} />
    </div>
  );
}

export default App;
