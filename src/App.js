import React, {useEffect, useState} from "react";
import './App.css';
import "./Quote.css";
import axios from "axios"

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setauthor] = useState("");
  const [changeColor,setChangeColor] = useState('#451252');
  const quoteAPI = async() => {
    let arrayOfQuotes = [];
    try{
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes=data.data;
      console.log(arrayOfQuotes);

    }catch(error){
      console.log(error);
    }
    try{
      setQuote(arrayOfQuotes.content);
      setauthor(arrayOfQuotes.author);
    }catch(error){
      console.log(error);

    }

    };
    useEffect(() => {
      quoteAPI();
    }, []);
    const handleClick=()=>
    {
      const randomColor= '#'+Math.random().toString(16).slice(2,8)
      setChangeColor(randomColor)
    }
    function callBoth(){
      quoteAPI();
      handleClick();
    }
  
  return (
    <div className="App" style={{backgroundColor: `${changeColor}`}}>
      <div className="quoteBox">
        <div className="container">
          <div className="quote">{quote}</div>
          <div className="quote">{author}</div>
          <div className="quoteButton"><button onClick={ callBoth}>Change Quote</button></div>
        </div>
      </div> 
      
    </div>
  );

};

export default App;
