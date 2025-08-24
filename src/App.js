import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import About   from "./components/About";
import Contact from "./components/Contact";
import Faculty from "./components/Faculty";
import Achievements from "./components/Achievements";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="faculty" element={<Faculty/>}></Route>
        <Route path="achievements" element={<Achievements/>}></Route>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
