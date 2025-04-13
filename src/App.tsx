import { useState } from "react";
import { DessertCard } from "./components/dessert-card/DessertCard";
import dessertData from "./data.json";
import { DessertType } from "./types/types";

function App() {
  const [data, setData] = useState(dessertData);
  const [cart, setCart] = useState<DessertType[]>([]);

  const handleAddToCart = (dessert: DessertType) => {
    setCart((prevCart) => [...prevCart, dessert]);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-[40px] font-bold">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((dessert) => (
          <DessertCard
            key={dessert.name}
            cart={cart}
            name={dessert.name}
            category={dessert.category}
            price={dessert.price}
            image={dessert.image.mobile}
            addToCart={() => handleAddToCart(dessert)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
