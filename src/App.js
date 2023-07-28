import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import Cookies from './Cookies';
import Candy from './Candy';
import Chips from './Chips';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                   
                    
                <Routes>
                    <Route  exact path="/" element={<VendingMachine/>} />

                    <Route  exact path="/cookies" element={<Cookies />} />
                    <Route  exact path="/candy" element={<Candy />} />
                    <Route  exact path="/chips" element={<Chips />} /> 
                </Routes>
            </BrowserRouter>  
      
    </div>
  );
}

export default App;
