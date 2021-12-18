import React, { useState } from 'react';
import { addNewProject } from '../../services/projects';
import './style.css';

const CreateProjectPopup = ({ show }) => {
  const [projectName, setProjectName] = useState('');

  const onProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const onCreate = () => {
    addNewProject({ name: projectName });
  };

  if (!show) return null;
  return (
    <div className="create-project-container">
      <input value={projectName} onChange={onProjectNameChange} />

      <div className="btn-wrapper">
        <div>Cancel</div>
        <div onClick={onCreate}>Create</div>
      </div>
    </div>
  );
};

export default CreateProjectPopup;
