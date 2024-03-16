import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Pokemon from "./Components/Pokemon";
import Navbar from "./Components/Navbar";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Router>
        <Pokemon />
      </Router>
    </div>
  </div>
);
export default App;
