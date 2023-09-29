import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/Home";
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer"; // Importe o componente de footer

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>‍👨‍💻L&R STORE👩‍💻</h1>
          <h3>A loja de periféricos gamers que cabe no seu bolso !</h3>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:storeId" element={<Store />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer /> {/* Adicione o componente de footer */}
      </div>
    </Router>
  );
}

export default App;
