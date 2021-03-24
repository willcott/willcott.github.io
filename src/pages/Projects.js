import React from 'react';

import ProjectList from '../components/projectList/ProjectList';

export default () => (
  <>

    <div className="fullscreen-page">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="page-title">Projects</div>
      <ProjectList />
    </div>
  </>
);
