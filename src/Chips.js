import React, {useState} from "react";
import { Link } from "react-router-dom";


const Chips = ()=>{

    const [chips,setChips]= useState(9);

    return (
        <>
        <h1 class="display-1"> WE LOVE CHIPS </h1>
        <div  >
          
           {[...Array(chips)].map((_,index)=>(
             <img 
             key={index}
             src="https://pngimg.com/d/potato_chips_PNG75.png"/>
           ))}

        </div>
        <Link to="/" className="link"> Come Back</Link>
</>
    )

};

export default Chips;