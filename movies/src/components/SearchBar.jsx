import { useState } from "react";

function SearchBar(){

  const [searchValue, setSearchValue] = useState("");
  const results = useLoader;

  return(
    <>
      <input 
        className="search"
        type="search" 
        placeholder="Enter a movie name" />
    </>
  );
}

export default SearchBar;