import { useEffect } from "react";
import { useHistory } from "react-router";
import useHttp from "../../../hooks/use-http";
import { addQuote } from "../../../lib/api";
import Layout from "../components/layout/Layout";
import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote)
  const history = useHistory()

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes')
    }
  }, [status,history])

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
  }
  return(
    <Layout>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </Layout>
  )
}