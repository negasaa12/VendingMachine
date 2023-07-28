import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./VendingMachine.css";
import Cookies from "./Cookies";
import Candy from "./Candy";
import Chips from "./Chips";


    const VendingMachine = () => {


        return ( 
     
        <div>
            
            <BrowserRouter>
                    <Link to="/cookies"> Cookies </Link>
                    <Link to="/candy"> Candy </Link>
                    <Link to="/chips"> Chips</Link>
                <Routes>
                    <Route  exact path="/cookies" element={<Cookies />} />
                    <Route  exact path="/candy" element={<Candy />} />
                    <Route  exact path="/chips" element={<Chips />} /> 
                </Routes>
            </BrowserRouter>
            <img className="background-image" src="https://e0.pxfuel.com/wallpapers/556/543/desktop-wallpaper-vending-machine-friends-pastel-aesthetic-anime-scenery-aesthetic-background.jpg"></img>
        </div>
    )
}
export default VendingMachine;