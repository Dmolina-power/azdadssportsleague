import * as React from "react";
import './App.css';
import Navigation from "./Components/Navbar";
import { Routes, Route} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Baseball from "./pages/Baseball";
import Basketball from "./pages/Basketball";
import Soccer from "./pages/Soccer";
import Flagfootball from "./pages/Flagfootball";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

function App() {
  return (
    
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="baseball" element={<Baseball />} />
        <Route path="basketball" element={<Basketball />} />
        <Route path="soccer" element={<Soccer />} />
        <Route path="football" element={<Flagfootball />} />
        <Route path="registration" element={<Registration />} />
        <Route path="contact" element={<Contact />} />
</Routes>
    </div>
  );
}

export default App;
