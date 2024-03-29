import React, { useEffect, useState } from "react";
import { fetchQuote } from "../../utils/FetchQuote";
import "../Quote/quote.css";

const Quote = () => {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetchQuote(setQuote);
  }, []);

  return (
    <>
      <h2>Daily Quote</h2>
      <p>{quote.quote}</p>
      <footer>{quote.author}</footer>
    </>
  );
};

export default Quote;
