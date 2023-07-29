import React, {useState} from "react";

import { Link } from "react-router-dom";
import "./Candy.css";

const Candy = ()=>{

    const [candy, setcandy] = useState(3);





    return(
        <div className="candy-container">

            <h1 class="display-3"> GIVE ME SOME</h1>

            {[...Array(candy)].map((_, index)=>(
                <img
                key={index}
                src="https://www.freepnglogos.com/uploads/candy-png/candy-list-phantom-food-drink-emojis-for-use-facebook-29.png"
                alt={`Candy ${index + 1}`}
                />
            ))}
            <Link to="/" className="link"> Come Back</Link>
           
        </div>
    )
}

export default Candy