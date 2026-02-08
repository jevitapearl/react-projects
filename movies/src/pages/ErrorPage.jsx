import { useNavigate, useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

function ErrorPage(){
  const error  = useRouteError();
  console.log(error);

  const navigate = useNavigate()

  return(
    <div>
      The page you are looking for doesn't exist.

      <button onClick={() => navigate(-1)}>Return to the previous page</button>
      <button><NavLink to="/">Go to Home page</NavLink></button>
    </div>
  );
}

export default ErrorPage;