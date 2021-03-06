import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import projects from '../../assets/projects.json';

import './ProjectList.scss';

const ProjectList = (props) => {
  const { listLength } = props;
  return (
    <div className="project-list">
      {Array(listLength)
        .fill()
        .map((value, index) => (
          <Link
            to={`/project/${projects[index].id}`}
            data-aos={index % 2 === 0 ? 'fade-up-left' : 'fade-up-right'}
            data-aos-anchor-placement="bottom-bottom"
            className={`project-list__project ${index % 2 === 0 ? 'offset-left' : 'offset-right'}`}
            key={projects[index].id}
          >
            <div className="project-list__project-contents">
              {index % 2 === 0 && (
              <div className="project-list__project-title">{projects[index].title}</div>
              )}
              <img className="project-list__project-image" src={projects[index].imageSrc} alt={projects[index].title} />
              {!(index % 2 === 0) && (
              <div className="project-list__project-title">{projects[index].title}</div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProjectList;

ProjectList.propTypes = {
  listLength: PropTypes.number,
};

ProjectList.defaultProps = {
  listLength: projects.length,
};
