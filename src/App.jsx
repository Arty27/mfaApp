import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Pokemon from "./Components/Pokemon";
import Navbar from "./Components/Navbar";

const App = () => (
  <div className="container">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokemon />} />
      </Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
