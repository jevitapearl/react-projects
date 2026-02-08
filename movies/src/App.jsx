import './App.css'
import { createHashRouter, RouterProvider, Outlet, useNavigation } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import About from './pages/About';
import Contact, { contactFormData } from './pages/Contact';
import Home from './pages/Home';
import Movies from './pages/Movies';
import ErrorPage from './pages/ErrorPage';
import { getMoviesData } from './api/getMoviesData';
import { getMovieDesc } from './api/getMovieDesc';
import MovieDesc from './components/MovieDesc';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/contact",
          element: <Contact/>,
          action: contactFormData
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/movies",
          element: <Movies/>,
          loader: getMoviesData
        },
        {
          path: "/movies/:movieID",
          element: <MovieDesc/>,
          loader: getMovieDesc
        }
     ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
     
  )
}

export default App

export function AppLayout(){

  const curr = useNavigation()
  
  return(
    <>
      <Header/>
      <div className='container'>
        {curr.state === "loading"? <Loading/>:<Outlet/>}
      </div>
      <Footer/>
    </>
  );
}