import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

//View Imports
import About from './views/About.js';
import WorkExperience from './views/WorkExperience.js';
import PersonalProjects from './views/PersoalProjects.js';
import NewProject from "./views/NewProject.js";

//CSS Imports
import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/experience">Work Experience</Link></li>
          <li><Link to="/projects">Personal Projects</Link></li>
          <li><Link to="/newprojects">new</Link></li>


        </ul>
      </nav>
      <Routes>
        <Route path="/" element= { <About/> }/>
        <Route path="/experience" element={ <WorkExperience/> } />
        <Route path="/projects" element={ <PersonalProjects/> } />
        <Route path="/newprojects" element={ <NewProject/> } />
      </Routes>
    </>

  );
}

export default App;
