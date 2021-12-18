import React, { useEffect, useState } from 'react';
import WorkingProject from '../WorkingProject/WorkingProject';
import { getProjectList } from '../../services/projects';
import './style.css';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    let projects = getProjectList();
    setProjectList(projects);
  }, []);

  const onProjectStart = (project) => {
    setActiveProject(project);
  };

  console.log(projectList);

  return (
    <div className="project-list-container">
      <WorkingProject projectList={projectList} activeProject={activeProject} />
      <div className="project-list-items">
        {projectList.map((item) => (
          <ProjectItem item={item} onProjectStart={onProjectStart} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
