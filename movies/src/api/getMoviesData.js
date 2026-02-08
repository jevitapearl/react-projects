export async function getMoviesData(){

  try{
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=avengers&page=1`);

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