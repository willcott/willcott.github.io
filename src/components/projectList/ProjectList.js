import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'lazysizes';

import projects from '../../assets/projects.json';
import tagmap from '../../assets/tagmap.json';

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
            // data-aos="fade-up"
            // data-aos-offset="-200"
            // data-aos-anchor-placement="bottom-top"
            className="project-list__project"
            key={projects[index].id}
          >
            <div className="project-list__project-contents">
              <div className="project-list__project-right">
                <div className="project-list__project-title underline">{projects[index].title}</div>
                <div className="project-list__project-tags">
                  {Array(projects[index].tags.length)
                    .fill()
                    .map((_, tagIndex) => (
                      <div className="tag-bubble">
                        <i className={tagmap[projects[index].tags[tagIndex]]} />
                        {projects[index].tags[tagIndex]}
                      </div>
                    ))}
                </div>
              </div>
              <img className="project-list__project-image lazyload" data-src={projects[index].imageSrc} alt={projects[index].title} src="/placeholder.png" />
              {/* {!(index % 2 === 0) && (
              <div className="project-list__project-title">{projects[index].title}</div>
              )} */}
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
