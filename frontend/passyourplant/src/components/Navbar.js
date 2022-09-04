import '../style/index.css';
import { Link } from "react-router-dom";
import { AuthContext } from './AuthContext.js';

function Navbar() {

  const username = AuthContext.userIsAuthenticated() ? AuthContext.getUser().data.sub : "";

  function showAuthButtons(){
    let registerButton;
    if(AuthContext.userIsAuthenticated()){
      return(
          <>
            <p className="nav-item">Logged in as {username}</p>
            <Link className="nav-link" to="/logout">Logout</Link>
          </>

      );
    }
    else{
      return(
          <>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/registration">Register</Link>
          </>

      );
    }
  }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>

      <Link className="nav-link" to="/add-plant">Add plant</Link>
      <Link className="nav-link" to="/about">About us</Link>
    </ul>
    <ul className={"navbar-nav ml-auto"}>
      {showAuthButtons()}
    </ul>
  </div>
</nav>
    );
}

export default Navbar;