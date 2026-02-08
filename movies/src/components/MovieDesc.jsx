import { useLoaderData, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function MovieDesc(){
  const movieDetails = useLoaderData();
  const {
    Actors, Country, Director, Genre, Language, Plot, Poster, Released, Runtime, Title, Writer, Year, imdbRating, imdbVotes
  } = movieDetails;

  return(
    <div className="movie-desc">
      <img src={Poster} alt="Movie Poster" />

      <div>
        <h1>{Title}</h1><br /><br />
        <i>{Year}, {Country}</i><br />
        <i>Genre: {Genre}</i><br />
        <em>Director: {Director}</em><br /><br />
        <p>Plot: <br />{Plot}</p><br />
        <h3>Other Details</h3>
        <p>Language: {Language}</p>
        <p>Actors: {Actors}</p>
        <p>Released: {Released}</p>
        <p>Runtime: {Runtime}</p>
        <p>Writer/s: {Writer}</p>
        <p>IMDB rating: <FaStar color="goldenrod" size={12}/> {imdbRating}/10.0 -  {imdbVotes} votes</p>
      </div>
    </div>
  );
}

export default MovieDesc;