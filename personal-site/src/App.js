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


//Represents the actual app page itself
//All other displays and components are rendered within this component
//This provides a high level control point and helps keep the code organized
const App =() => {
  return (
    <>
      <nav className='flex flex-row justify-between items-center w-full h-[4em] bg-dv-quartz p-4'>
          <LinkComponent path='/' text='About'/>
          <LinkComponent path='/experience' text='Work Experience'/>
          <LinkComponent path='/projects' text='Personal Projects'/>
          <LinkComponent path='/newprojects' text='New Projects'/>
      </nav>
      <div className='flex flex-col h-screen'> 
        <Routes>
          <Route path="/" element= { <About/> }/>
          <Route path="/experience" element={ <WorkExperience/> } />
          <Route path="/projects" element={ <PersonalProjects/> } />
          <Route path="/newprojects" element={ <NewProject/> } />
        </Routes>
      </div>
    </>

  );
}

export default App;
