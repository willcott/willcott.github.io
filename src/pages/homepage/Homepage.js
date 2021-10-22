/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Tilt from '../../components/tilt/Tilt';
import ProjectList from '../../components/projectList/ProjectList';
import Contact from '../../components/contact/Contact';

import './Homepage.scss';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
  }

  onAboutClick = () => {
    this.aboutRef.current.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  };

  scrollToContact = () => {
    this.contactRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  scrollToContactsInContactPage = () => {
    const { match } = this.props;

    window.requestAnimationFrame(() => {
      if (match.path === '/contact') {
        this.scrollToContact();
      }
    });
  }

  componentDidMount = () => {
    this.scrollToContactsInContactPage();
    window.setTimeout(() => this.setState({ loaded: true }), 1000);
  }

  componentDidUpdate = () => {
    this.scrollToContactsInContactPage();
  }

  render = () => {
    const { match } = this.props;
    const { loaded } = this.state;
    return (
      <>
        <Helmet>
          <title>{match.path === '/contact' ? 'Contact - Will Cottingham' : 'Will Cottingham - Software Development, Sound Design, and Audio Production'}</title>
        </Helmet>
        <div
          className="homepage"
        >
          <div className="top-page">
            <div className="contents">
              <div className="megaphone">
                <i className="fa fa-bullhorn" />
              </div>
              <div className="lines">
                <h1 className={`line one ${loaded || 'loading'}`}>
                  Hello, I'm Will
                </h1>
                <h1 className="line two">
                  A Software Engineer living in Manchester, UK.
                </h1>
                <h1 className="line three">
                  What would you like to hear more about?
                </h1>
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

          </div>
          <div className="arrow" />

          <div className="about-paragraph" ref={this.aboutRef}>
            <Tilt className="about-paragraph__section" style={{ alignSelf: 'start' }}>
              <p className="about-paragraph__main">
                This is a place to hold and display some of the different projects I've worked
                on over time.
              </p>
            </Tilt>
            <Tilt className="about-paragraph__section" style={{ alignSelf: 'end' }}>
              I currently work day to day on smart speaker applications for BBC Sounds, but I
              like to dabble in web development and audio projects on the side. I also fill my time
              recording music and have worked on short films as a sound designer.
            </Tilt>
            <Tilt className="about-paragraph__section">
              If you&apos;re interested in learning more about my
              projects and experience please take a look around this site and
              don&apos;t hesitate to
              {' '}
              <button onClick={this.scrollToContact} type="button" className="inline">get in touch.</button>
            </Tilt>
          </div>

          <h2 className="project-title">
            Projects
          </h2>
          <ProjectList listLength={3} />
          <NavLink to="/projects" type="button" className="more-button underline">
            More Projects
          </NavLink>
          <h2 className="page-title project-title" ref={this.contactRef}>
            Get in contact
          </h2>
          <Contact match={match} />
        </div>
      </>
    );
  }
}

Homepage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
