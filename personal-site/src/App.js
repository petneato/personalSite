import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { About } from './pages/about';
import { WorkExperience } from './pages/WorkExperience';
import { PersonalProjects } from './pages/PersoalProjects';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/experience">Work Experience</Link></li>
          <li><Link to="/projects">Personal Projects</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element= { <About/> }/>
        <Route path="/experience" element={ <WorkExperience/> } />
        <Route path="/projects" element={ <PersonalProjects/> } />
      </Routes>
    </>

  );
}

export default App;
