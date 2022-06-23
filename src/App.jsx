import { useState } from 'react'
import QuoteBox from "./QuoteBox.json"


import './App.css'
import Quote from './Components/Quote'


function App() {

  const [nextQuote, setnextQuote] = useState(0)

  const index = () =>{
    setnextQuote(nextQuote+1 )
    
  }

  return (
    <>
      <Quote
        Quote={QuoteBox[nextQuote].quote}
        author={QuoteBox[nextQuote].author}
        clic={index}
      />
    </>
  );
}

export default App
