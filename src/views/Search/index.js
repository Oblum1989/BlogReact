import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

import data from "../../data/user.json";
import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  const [userData, setUserData] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setUserData(data)
    }
    getUsers().catch(null)
  }, [])

  const handleSearchClick = (searchText) => {
    if (userData?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = userData.filter(
        (value) =>
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
      );
      setResults(filteredData);
    }
    setIsAtTop(true);
  };
  const handleCloseClick = () => {
    setIsAtTop(false);
    setResults([]);
  };
  return (
    <>
      <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
        <SearchBox
          onSearch={handleSearchClick}
          onClose={handleCloseClick}
          isSearching={isAtTop}
        />
        <SearchResults results={results} isSearching={isAtTop} />
      </div>
    </>
  );
}
