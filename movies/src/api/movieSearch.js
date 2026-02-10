export async function movieSearch(query){

  try{
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=${query}&page=1`);

    if (response.status === 401) {
      console.error("API Key is invalid or missing!");
      return null;
    }

    const data = await response.json();
    return data.Search;
    
  }
  catch(error){
    console.log(error)
  }
}