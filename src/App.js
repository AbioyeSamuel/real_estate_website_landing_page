import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact />
    </Routes>
    </Router>
    <AboutSection/>
    <Footer/>
    </>
    
  );
}

export default App;
