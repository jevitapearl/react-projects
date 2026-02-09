import { useNavigate, useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ErrorPage(){
  const error  = useRouteError();
  console.log(error);

  const navigate = useNavigate()

  return(
    <div className="error-page">
      <p>The page you are looking for doesn't exist.</p>

      <div className="error-btns">
        <button className="btn" onClick={() => navigate(-1)}>Return to the previous page</button>
        <button className="btn"><NavLink to="/">Go to Home page</NavLink></button>
      </div>
    </div>
  );
}

export default ErrorPage;