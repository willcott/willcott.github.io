/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectList from '../../components/projectList/ProjectList';
import Contact from '../../components/contact/Contact';

import './Homepage.scss';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
    };
  }

  onAboutClick = () => {
    const { showAbout } = this.state;
    this.setState({ showAbout: !showAbout });
  };

  render = () => {
    const { showAbout } = this.state;

    return (
      <div
        className="homepage"
      >
        <div className="top-page">
          <div className="contents">
            <div className="megaphone">
              <i className="fa fa-bullhorn" />
            </div>
            <div className="lines">
              <div className="line one">
                Hello, I'm Will
              </div>
              <div className="line two">
                A Software Engineer living in Manchester, UK.
              </div>
              <div className="line three">
                What would you like to hear more about?
              </div>
            </div>
          </div>
          <div className="line four">
            <button type="button" className="home-button" onClick={this.onAboutClick}>
              About
            </button>
            <NavLink to="/projects" type="button" className="home-button">
              Projects
            </NavLink>
            <NavLink to="/cv" type="button" className="home-button">
              Experience
            </NavLink>
          </div>
          {showAbout && (
          <div className="about-paragraph">
            I&apos;m currently working at the BBC on the BBC
            Sounds smart speaker applications, however I have an interest in other
            technology spaces including web development and audio applications. I
            also fill my time recording music and have worked on short film projects
            as a sound designer.
            <br />
            <br />
            If you&apos;re interested in learning more about my
            projects and experience please take a look around this site and
            don&apos;t hesitate to get in touch.
          </div>
          )}
        </div>
        <div className="arrow" />

        <div className="page-title project-title">
          Projects
        </div>
        <ProjectList listLength={3} />
        <NavLink to="/projects" type="button" className="more-button">
          More Projects
        </NavLink>
        <div className="page-title project-title">
          Get in contact
        </div>
        <Contact />
      </div>
    );
  };
}
