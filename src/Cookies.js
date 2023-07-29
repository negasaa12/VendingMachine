import React, {useState} from "react";
import "./Cookies.css";
import { Link } from "react-router-dom";

const Cookies = () => {
    const [cookieCount, setCookieCount] = useState(3); // Initial number of cookies
  
    const addCookie = () => {
      setCookieCount((prevCount) => prevCount + 1); // Increment cookie count by 1
    };
  
    return (
      <div>

        <h1 class="display-3">COOKIES</h1>
        {cookieCount < 6 ?  <div className="cookies-container">
          {/* Use a loop to render the cookies based on the cookieCount */}
          {[...Array(cookieCount)].map((_, index) => (
            <img
              key={index}
              src="https://pngimg.com/d/cookie_PNG13656.png"
              alt={`Cookie ${index + 1}`}
            />
          ))}
            <button onClick={addCookie}>Add Cookie</button>
            <Link  className="link"to="/"> Come Back</Link>
        </div> : (<div> <h2> I Think That's Enough, Buddy.</h2> <Link  className="link"to="/"> Come Back</Link> </div>)}
       
      
      </div>
    );
  };
  
  export default Cookies;
 
  
  
