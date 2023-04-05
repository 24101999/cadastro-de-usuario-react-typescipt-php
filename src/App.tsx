import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Cadastro from "./components/Cadastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
