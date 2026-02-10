export async function getMovieDesc({params}){
  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${params.movieID}&plot=full`);
    
    if (response.status === 401) {
      console.error("API Key is invalid or missing!");
      return null;
    }

    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}