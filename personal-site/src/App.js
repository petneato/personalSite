//React imports
import React  from 'react';
import { Routes, Route, Link } from "react-router-dom";

//View Imports
import About from './views/About.js';
import WorkExperience from './views/WorkExperience.js';
import PersonalProjects from './views/PersoalProjects.js';
import NewProject from "./views/NewProject.js";

//Component imports
import LinkComponent from './components/LinkComponent.js';

//CSS Imports
import './css/app.css';

const App =() => {
  return (
        <>
          <nav>
            <ul>
              <LinkComponent path='/' text='About'/>
              <LinkComponent path='/experience' text='Work Experience'/>
              <LinkComponent path='/projects' text='Personal Projects'/>
              <LinkComponent path='/newprojects' text='New Projects'/>
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
