import React from 'react';
import StackBox from './StackBox.js'

import '../css/ProjectCard.css';

const ProjectCard = () => {
    return (
        <div className="project-card bg-orange-500">
            <StackBox />
            <span>
                <h3>Project Name</h3>
                <p>Project Description</p>
                <p>Project Status: Status</p>
                <p>Project Dates: Dates</p>
                <a href=""></a>
            </span>

        </div>
    );
};

export default ProjectCard;