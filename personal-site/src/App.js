import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './pages/About';
import { WorkExperience } from './pages/WorkExperience';
import { PersonalProjects } from './pages/PersoalProjects';
import { NewProject } from "./pages/NewProject";

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
