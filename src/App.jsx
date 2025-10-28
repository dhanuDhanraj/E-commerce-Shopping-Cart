import React from "react";
import ProductList from "./components/ProductList";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>🛍️ Colorful Product Store</h1>
        <p>Explore our vibrant collection of shoes and accessories!</p>
      </header>
      <ProductList />
    </div>
  );
};

export default App;
