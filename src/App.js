import React from 'react';
import './App.css';
import Products from './productsContainer/products/products';
import Navbar from './navbar/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
