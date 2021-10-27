import React from 'react';
import { Helmet } from 'react-helmet';

import ProjectList from '../components/projectList/ProjectList';

export default () => (
  <>
    <Helmet>
      <title>Projects - Will Cottingham</title>
    </Helmet>
    <div className="fullscreen-page">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="page-title">Projects</div>
      <ProjectList />
    </div>
  </>
);
