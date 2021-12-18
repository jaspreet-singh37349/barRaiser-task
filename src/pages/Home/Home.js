import React from 'react';
import ProjectList from '../../components/ProjectList/ProjectList';
import SideNav from '../../components/SideNav/SideNav';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <SideNav />
      <ProjectList />
    </div>
  );
};

export default Home;
