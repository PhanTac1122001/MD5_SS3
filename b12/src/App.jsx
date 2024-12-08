import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const initialWealth = 200000000000; // Tài sản Elon Musk (200 tỷ USD)
  const [elonWealth, setElonWealth] = useState(initialWealth);
  const [spent, setSpent] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Tesla Model S", price: 79999, quantity: 0 },
    { id: 2, name: "Twitter Subscription", price: 8, quantity: 0 },
    { id: 3, name: "SpaceX Rocket", price: 50000000, quantity: 0 },
    { id: 4, name: "SolarCity Panels", price: 15000, quantity: 0 },
    { id: 5, name: "Neuralink Implant", price: 3000, quantity: 0 },
    { id: 6, name: "Boring Company Flamethrower", price: 500, quantity: 0 },
    { id: 7, name: "Hyperloop Ticket", price: 200, quantity: 0 },
    { id: 8, name: "OpenAI Investment", price: 100000000, quantity: 0 },
    { id: 9, name: "Mars Colony Spot", price: 10000000, quantity: 0 },
  ]);

  // Xử lý khi click "Buy"
  const handleBuy = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    const product = products.find((p) => p.id === id);
    setSpent((prevSpent) => prevSpent + product.price);
    setElonWealth((prevWealth) => prevWealth - product.price);
  };

  // Xử lý khi click "Sell"
  const handleSell = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    const product = products.find((p) => p.id === id);
    if (product.quantity > 0) {
      setSpent((prevSpent) => prevSpent - product.price);
      setElonWealth((prevWealth) => prevWealth + product.price);
    }
  };
  return (
    <>
      <div className="App">
      <Header elonWealth={elonWealth} spent={spent} />
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onBuy={handleBuy}
            onSell={handleSell}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
