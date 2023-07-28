import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./VendingMachine.css";
import Cookies from "./Cookies";
import Candy from "./Candy";
import Chips from "./Chips";


const VendingMachine = ()=>{


    return ( 
     
        <div>
             <h1> Welcome To The Amazing Vending Machine</h1>
            {/* <img src="https://i.pinimg.com/originals/4a/79/ff/4a79ffda5125e57996994b4d7297929f.png"></img> */}
        
            <Chips/>
      
   
        </div>
    )
}
export default VendingMachine;