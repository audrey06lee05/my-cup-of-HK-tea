import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import MenuPage from "./pages/menu";
import ContactPage from "./pages/contact";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/menu" exact element={<MenuPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
