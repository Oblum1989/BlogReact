import { Route, useParams, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import FourOFour from "../../404"
import Comments from "../components/comments/Comments"
import Layout from "../components/layout/Layout"
import HighlightedQuote from "../components/quotes/HighlightedQuote"

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning reactjs'},
  {id: 'q2', author: 'Ana', text: 'Study reactjs'},
]

export default function QuoteDetail() {
  const match = useRouteMatch()
  const {quoteId} = useParams()
  const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

  if (!quote) {
    return <FourOFour/>
  }
  return(
    <Layout>
      <HighlightedQuote {...quote}/>
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