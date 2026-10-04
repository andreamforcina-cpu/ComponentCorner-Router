import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import CartItem from "./components/CartItem";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description:
        "Premium noise-cancelling headphones with 30-hour battery life",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <>
      <Header cartCount={cart.length} />

      <main>
        <section className="products-section">
          <h2>Our Products</h2>

          <div className="products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="shopping-cart">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}

              <h3 className="cart-total">
                Total: ${cartTotal.toFixed(2)}
              </h3>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;