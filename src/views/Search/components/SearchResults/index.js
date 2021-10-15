import SearchResultsItem from "./SearchResultsItem"

export default function SearchResults({results, isSearching}) {
  return(
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%"
    }}>
      {!results.length && isSearching && <p>No existen resultados</p>}
      {results?.map((value)=><SearchResultsItem key={value.id} {...value}/>
      )}
    </div>
  )
}