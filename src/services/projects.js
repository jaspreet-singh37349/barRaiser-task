export const addNewProject = (data) => {
  let projects = localStorage.getItem('projectList');
  if (projects) {
    projects = JSON.parse(projects);
    data.id = projects.length + 1;
    projects = [data, ...projects];
  } else {
    data.id = 1;
    projects = [data];
  }

  localStorage.setItem('projectList', JSON.stringify(projects));
};

export const getProjectList = () => {
  let projects = JSON.parse(localStorage.getItem('projectList'));
  return projects ?? [];
};
