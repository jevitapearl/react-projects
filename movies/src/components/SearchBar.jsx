import { useState, useEffect } from "react";
import { movieSearch }  from "../api/movieSearch"

function SearchBar(){

  const [searchValue, setSearchValue] = useState("");
  const [searchArr, setSearchArr] = useState([]);
  

  useEffect(() =>{

    const timeoutID = setTimeout(async () =>{

      if (searchValue.trim().length > 0){
        try{
          const data = await movieSearch(searchValue);
          console.log(data);
          setSearchArr(data? data.slice(0,5):[]);
        }
        catch(error){
          console.log(error);
        }
      }
      else{
        setSearchArr([]);
      }
    }, 1000); 

    return () => clearTimeout(timeoutID);

  }, [searchValue]);

  return(
    <div className="search">
      <input 
        className="search-bar"
        type="search" 
        placeholder="Enter a movie name"
        onChange={(e)=>setSearchValue(e.target.value)}
        value={searchValue} 
        />

      <ul className="search-results">
        {
          searchArr.map((movie) =>{
            return(
              <li key={movie.imdbID} className="search-item">
                <NavLink to={"/movies/"+movie.imdbID}>
                  <img className="search-poster" src={movie.Poster} alt="Movie Poster" />
                  <div>
                    <p>{movie.Title}</p>
                    <i>{movie.Year}</i>
                  </div>
                </NavLink>
              </li>
            );
          }

          )
        }
      </ul>
    </div>
  );
}

export default SearchBar;