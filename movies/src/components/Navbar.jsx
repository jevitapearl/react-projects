import { NavLink } from "react-router-dom";

function Navbar(){
  return(
    <nav className="navbar">
      <div id="logo"><NavLink to="/"><h2>JP-Flix</h2></NavLink></div>

      <ul className="nav-links">
        {
          ["Home", "About", "Contact", "Movies"].map(
            (ele) => {
              return (
                <li key={ele}>
                  <NavLink to={ele ==="Home"? "/": `/${ele.toLowerCase()}`}>{ele}</NavLink>
                </li>
              );
            }
          )
        }
      </ul>
    </nav>
  );
}

export default Navbar;

