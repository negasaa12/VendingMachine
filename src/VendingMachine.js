import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./VendingMachine.css";
import Cookies from "./Cookies";
import Candy from "./Candy";
import Chips from "./Chips";


    const VendingMachine = () => {


        return (
            <div className="VendingMachine" style={{ backgroundImage: `url(${new URL("https://e0.pxfuel.com/wallpapers/556/543/desktop-wallpaper-vending-machine-friends-pastel-aesthetic-anime-scenery-aesthetic-background.jpg")})` }}>
                
                <h1 className="VendingMachine-heading"> Welcome To Vending Machine Heaven</h1>
            
                <div className="VendingMachine-links">
                <h1><Link to="/cookies">Cookies</Link> </h1>
                <h1><Link to="/candy">Candy</Link></h1>
                <h1><Link to="/chips">Chips</Link></h1>
                
                </div>
            </div>
          );
    
}
export default VendingMachine;