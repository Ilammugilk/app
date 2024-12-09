import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Myhome from "./home";
import Myabout from "./about";
import Myskill from "./skill";
import Myproject from "./project";

function App() {
  return (
    <HashRouter>
      <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded me-3 ms-3">
        <div className="container">
          <Link className="navbar-brand">Ilammugil</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-4">
                <Link className="nav-link" active to="/Home">Home</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" active to="/about">About</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" active to="/skill">Skill</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link" active to="/project">Project</Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>

      </header>
      <Routes>
        <Route exact path="/Home" element={<Myhome />}/>
        <Route exact path="/about" element={<Myabout />}/>
        <Route exact path="/skill" element={<Myskill />}/>
        <Route exact path="/project" element={<Myproject/>}/>
      </Routes>
    </HashRouter>

  );
}

export default App;
