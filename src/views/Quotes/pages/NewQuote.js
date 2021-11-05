import { useHistory } from "react-router";
import Layout from "../components/layout/Layout";
import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote() {
  const history = useHistory()
  const addQuoteHandler = () => {
    history.push('/quotes')
  }
  return(
    <Layout>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Layout>
  )
}