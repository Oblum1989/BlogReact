export default function SearchResultsItem({name, username, email, phone}) {
  return(
    <div style={{
      backgroundColor: "aliceblue",
      padding: "1rem",
      marginTop: "1rem"
    }}>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  )
}