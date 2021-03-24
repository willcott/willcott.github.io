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
        <div className="navigation">
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
            <NavLink to="/contact" activeClassName="active" type="button" onClick={() => setShowMobileNav(false)}>
              Contact
            </NavLink>
            <NavLink to="/projects" activeClassName="active" type="button" onClick={() => setShowMobileNav(false)}>
              Projects
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
          <NavLink
            to="/"
            activeClassName="active"
            isActive={checkHomeLinkIsActive}
            type="button"
          >
            <i className="fa fa-home" />
          </NavLink>
          <NavLink to="/contact" activeClassName="active" type="button">
            Contact
          </NavLink>
          <NavLink to="/projects" activeClassName="active" type="button">
            Projects
          </NavLink>
          <NavLink to="/cv" activeClassName="active" type="button">
            CV
          </NavLink>
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
