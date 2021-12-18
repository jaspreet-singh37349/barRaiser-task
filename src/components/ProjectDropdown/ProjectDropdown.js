import React, { useEffect, useState } from 'react';
import CreateProjectPopup from '../CreateProjectPopup/CreateProjectPopup';
import { getProjectList } from '../../services/projects';
import './style.css';

const ProjectDropdown = ({ show, projectList }) => {
  const [projectName, setProjectName] = useState('');
  const [showProjectPopup, setPopup] = useState(false);

  const onProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const onCreateProject = () => {
    setPopup(!showProjectPopup);
  };

  if (!show) return null;

  return (
    <div className="dropdown-container">
      <input value={projectName} onChange={onProjectNameChange} />
      <div onClick={onCreateProject}>create new project</div>
      <CreateProjectPopup show={showProjectPopup} />
    </div>
  );
};

export default ProjectDropdown;
