import { useState } from "react";
import { DessertCard } from "./components/dessert-card/DessertCard";
import dessertData from "./data.json";
import { DessertType } from "./types/types";
import { Cart } from "./components/cart/Cart";
import { OrderModal } from "./components/modal/OrderModal";

function App() {
  const [cart, setCart] = useState<DessertType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (dessert: DessertType) => {
    setCart((prevCart) => [...prevCart, dessert]);
  };

  const handleRemoveFromCart = (name: string) => {
    const indexOfDessert = cart.findIndex((dessert) => dessert.name === name);
    if (indexOfDessert !== -1) {
      setCart(cart.filter((_, index) => index !== indexOfDessert));
    }
  };

  const confirmOrder = () => {
    setIsModalOpen(true);
    window.scrollTo(0, 0);
  };

  const startNewOrder = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5 p-5 pb-10">
        <div>
          <h1 className="text-[40px] font-bold mb-5">Desserts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {dessertData.map((dessert) => (
              <DessertCard
                key={dessert.name}
                data={dessert}
                cart={cart}
                addToCart={() => handleAddToCart(dessert)}
                removeFromCart={() => handleRemoveFromCart(dessert.name)}
              />
            ))}
          </div>
        </div>
        <Cart
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          confirmOrder={() => confirmOrder()}
        />
      </div>
      {isModalOpen && <OrderModal cart={cart} startNewOrder={startNewOrder} />}
    </>
  );
}

export default App;
