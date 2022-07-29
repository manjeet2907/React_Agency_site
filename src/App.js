import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import About from "./Pages/About";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Components/Navbar";
import Footer from "./Pages/Components/Footer";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route end path='/React_Agency_site' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
