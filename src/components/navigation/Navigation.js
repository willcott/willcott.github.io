import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, withRouter } from 'react-router-dom';
import { SmallScreen, LargeScreen } from '../utils/DeviceCheck';

import './Navigation.scss';

function Navigation(props) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const checkHomeLinkIsActive = () => {
    const { location } = props;

    return location.pathname === '/';
  };

  return (
    <>
      <SmallScreen>
        <div className="navigation mobile">
          <button type="button" onClick={() => setShowMobileNav(!showMobileNav)} style={{ textDecoration: 'none' }}>
            <i className="fa fa-bars" />
          </button>
          {showMobileNav && (
          <>
            <NavLink
              to="/"
              activeClassName="active"
              isActive={checkHomeLinkIsActive}
              type="button"
              onClick={() => setShowMobileNav(false)}
            >
              <i className="fa fa-home" />
            </NavLink>
            <NavLink to="/projects" activeClassName="active" type="button" onClick={() => setShowMobileNav(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" activeClassName="active" type="button" onClick={() => setShowMobileNav(false)}>
              Contact
            </NavLink>
            <NavLink to="/cv" activeClassName="active" type="button" onClick={() => setShowMobileNav(false)}>
              CV
            </NavLink>
          </>
          )}
        </div>
      </SmallScreen>
      <LargeScreen>
        <div className="navigation">
          <div className="links">
            <NavLink
              to="/"
              activeClassName="active"
              isActive={checkHomeLinkIsActive}
              type="button"
            >
              <i className="fa fa-home" />
            </NavLink>
            <NavLink to="/projects" activeClassName="active" type="button">
              Projects
            </NavLink>
            <NavLink to="/contact" activeClassName="active" type="button">
              Contact
            </NavLink>
            <NavLink to="/cv" activeClassName="active" type="button">
              CV
            </NavLink>
          </div>
          <div className="right-section">
            MANCHESTER - UK
            <i className="fa fa-map-pin" />
          </div>
        </div>
      </LargeScreen>
    </>
  );
}

export default withRouter(Navigation);

Navigation.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
    .isRequired,
};
