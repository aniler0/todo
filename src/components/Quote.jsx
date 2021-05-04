import React, { useEffect, useState } from "react";
import { fetchQuote } from "../utils/FetchQuote";
import "../styles/quote.css";

const Quote = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetchQuote(setQuote);
  }, []);

  return (
    <>
      <h2>Daily Quote</h2>
      <p>
        "{quote.quote}"<footer>{quote.author}</footer>
      </p>
    </>
  );
};

export default Quote;
