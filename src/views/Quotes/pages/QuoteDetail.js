import { useEffect } from "react"
import { Route, useParams, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import ErrorMessage from "../../../components/ErrorMessage"
import Loading from "../../../components/Loading"
import useHttp from "../../../hooks/use-http"
import { getSingleQuote } from "../../../lib/api"
import Comments from "../components/comments/Comments"
import Layout from "../components/layout/Layout"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import NoQuotesFound from "../components/quotes/NoQuotesFound"

export default function QuoteDetail() {
  const match = useRouteMatch()
  const {quoteId} = useParams()

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return <Loading title="Charging quote"/>
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (status === 'completed' && !loadedQuote.text ) {
    return <NoQuotesFound />
  }

  return(
    <Layout>
      <HighlightedQuote {...loadedQuote}/>
      <Route path={match.path} exact >
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`} >Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} >
        <Comments/>
      </Route>
    </Layout>
  )
}