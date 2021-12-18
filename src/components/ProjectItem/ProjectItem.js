import React, { useState } from 'react';
import './style.css';

const ProjectItem = ({ item, onProjectStart }) => {
  const [active, setActive] = useState(false);

  const onProjectToggle = () => {
    if (!active) {
      onProjectStart(item);
      setActive(true);
    } else {
      onProjectStart(null);
      setActive(false);
    }
  };

  return (
    <div>
      {item.name}
      <div onClick={onProjectToggle}>Start</div>
    </div>
  );
};

export default ProjectItem;
