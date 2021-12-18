import React, { useState } from 'react';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';
import useTimer from '../../customhooks/useTimer';
import './style.css';

const WorkingProject = ({ projectList, activeProject }) => {
  const [projectName, setProjectName] = useState('');
  const [showDropdown, setDropdown] = useState(false);

  console.log(activeProject);

  const [seconds, minutes, hours] = useTimer(0, 0, 0, activeProject);

  const onProjectChange = (e) => {
    setProjectName(e.target.value);
  };

  const onCreateProject = () => {
    setDropdown(!showDropdown);
  };

  return (
    <div className="project-create-container">
      <input
        className="project-name-input"
        value={projectName}
        onChange={onProjectChange}
      />
      <div>
        <p className="project-txt" onClick={onCreateProject}>
          + Project
        </p>
        <ProjectDropdown show={showDropdown} projectList={projectList} />
      </div>
      <div className="timer">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="start-btn">Start</div>
    </div>
  );
};

export default WorkingProject;
