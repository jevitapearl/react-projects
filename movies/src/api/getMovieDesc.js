export async function getMovieDesc({params}){

  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${params.movieID}&plot=full`);
    const data = response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}