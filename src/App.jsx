import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Pokemon from "./Components/Pokemon";
import Navbar from "./Components/Navbar";

const App = () => (
  <div className="container">
    <Router>
      <Navbar />
      <Pokemon />
    </Router>
  </div>
);
export default App;
