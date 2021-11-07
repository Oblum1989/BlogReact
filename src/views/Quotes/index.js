import { useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound";
import QuoteList from "./components/quotes/QuoteList";
import "./index.css"

export default function Quotes() {
  const {sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes , true)

  useEffect(() => {
    sendRequest()
  }, [sendRequest])

  if (status === 'pending') {
    return <Loading title="Charging quotes"/>
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <Layout>
      <QuoteList quotes={loadedQuotes} />
    </Layout>
  );
}
