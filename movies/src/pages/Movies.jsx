import { useLoaderData, NavLink } from "react-router-dom";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";


function Movies(){

  const moviesData = useLoaderData();

  const displayData = useMemo(() =>{
    return moviesData.Search;
  },
  [moviesData.Search]);


  return(
    <div>
        <SearchBar/>

      
      <ul className="movie-grid">
        {displayData.map(({imdbID, Poster, Title, Year}) => {
          return(
            <li key={imdbID} className="movie-card">
              
              <img className="movie-poster" src={Poster} alt="Movie poster" />

              <div div="movie-details">
                <h3 className="movie-title">{Title}</h3>
                <i>{Year}</i>
              </div>

              <NavLink to={"/movies/"+imdbID}>
              <button className="btn">
                Know more
              </button>
              </NavLink>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}

export default Movies;


