import React from 'react';

import Contact from '../../components/contact/Contact';
import ProjectList from '../../components/projectList/ProjectList';
import Waveform from '../../components/waveform/Waveform';

import './Homepage.scss';

export default () => (
  <div
    className="homepage"
  >
    <div className="fullscreen-page">
      <div className="titles" data-aos="out" data-aos-anchor-placement="top-top">
        <div className="titles__main">
          Will Cottingham
        </div>
        <div className="titles__sub">Software Development, Sound Design, and Audio Production</div>
      </div>
      <Waveform />
      <div className="arrow" data-aos="out" data-aos-anchor-placement="bottom-bottom" />
    </div>
    <div className="fullscreen-page project-section">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="page-title">Projects</div>
      <ProjectList listLength={3} />
    </div>
    <div className="fullscreen-page">
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="page-title">Contact</div>
      <Contact />
    </div>
  </div>
);
