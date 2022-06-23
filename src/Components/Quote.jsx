import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoChevronForwardSharp } from "react-icons/io5";



const Quote = ({Quote, author, clic}) => {
    return (
      <div className="card">
      <div>
        <h1><FaQuoteLeft /> {Quote}</h1>
        <div className="classAuthor"> <h3>-{author}</h3></div>
      </div>
      <div className='buttonNext'>
      <button onClick={clic}>
            <div className="icon">
              <IoChevronForwardSharp />
            </div>
          </button>
          </div>
      </div>
    );
};

export default Quote;