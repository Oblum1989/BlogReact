import { useState } from "react";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import QuoteList from "./components/quotes/QuoteList";
import "./index.css"

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning reactjs'},
  {id: 'q2', author: 'Ana', text: 'Study reactjs'},
]

export default function Quotes() {
  const [quotesList, setQuotesList] = useState(DUMMY_QUOTES);
  return (
    <Layout>
      {quotesList.length === 0 ? (
        <NoQuotesFound />
      ) : (
        <QuoteList quotes={quotesList} />
      )}
    </Layout>
  );
}
