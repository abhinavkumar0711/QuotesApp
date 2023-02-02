import React, { useState, useEffect } from "react";
import "./App.css";
var x = 0;
const App = () => {
  const [quote, setQuote] = useState({});
  const [bg, setBg] = useState("#16DB93");
  useEffect(() => {
    
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
  };
  const background = () => {
    x++;
    if(x===5) x=1;
    if(x===1) setBg("#e8f9fd");
    else if(x===2) setBg("#fff685");
    else if(x===3) setBg("#a0d2eb");
    else if(x===4) setBg("#ffa8B6");
    
  };
  const buttonfunction = ()=>{
    background();
    fetchQuote();
  }
  return (
    <div style={{ backgroundColor: bg }} className="bg">
      <div className="quote_box">
        <div className="quotes">
          <p>{quote.content}</p>
        </div>
        <p className="author">~ {quote.author}</p>
        <div className="btn">
          <button onClick={buttonfunction} className="button-22">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
