import React from 'react';
import { useState } from 'react'
import QuotesBox from "../QuotesBox.json"
import { FaQuoteLeft } from 'react-icons/fa';
import { IoChevronForwardSharp } from "react-icons/io5";
import Colors from './Colors';

const CardQuote = () => {
  const random = () => Math.floor(Math.random() * QuotesBox.length);

  const [nextQuote, setnextQuote] = useState(QuotesBox[random()]);

  const index = () => {
    setnextQuote(QuotesBox[random()]);
  };

  const color = Colors[Math.floor(Math.random() * Colors.length)];
  

  return (
    <header className="App-header" style={{ background: color }}>
      <div className="card">
        <div>
          <h1 style={{ color: color }}>
            <FaQuoteLeft /> {QuotesBox[random()].quote}
          </h1>
          <div className="classAuthor">
            {" "}
            <h3 style={{ color: color }}>-{QuotesBox[random()].author}</h3>
          </div>
        </div>
        <div className="buttonNext">
          <button onClick={index} style={{ background: color }}>
            <div className="icon">
              <IoChevronForwardSharp />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CardQuote;