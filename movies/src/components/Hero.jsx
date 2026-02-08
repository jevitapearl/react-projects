import HeroImage from "../assets/hero-img.jpg"
import { Link } from "react-router-dom";

function Hero(){
  return(
    <div className="hero">
        <div className="hero-text">
          <h1>Find Any Movie in Seconds</h1>
          <p>Search millions of titles, explore cast details, ratings, posters, and release information - all in one place.</p>
          <Link to="/movies">
            <button className="btn red">Explore</button>
          </Link>
        </div>

        <div>
          <img className="hero-img" src={HeroImage} alt="Theatre image" />
        </div>

    </div>
  );
}

export default Hero;