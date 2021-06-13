import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const ExtraSmallScreen = (props) => {
  const { children } = props;

  return (
    <MediaQuery maxWidth={500}>
      {children}
    </MediaQuery>
  );
};

const LargerThan500Screen = (props) => {
  const { children } = props;

  return (
    <MediaQuery minWidth={501}>
      {children}
    </MediaQuery>
  );
};

const SmallScreen = (props) => {
  const { children } = props;

  return (
    <MediaQuery maxWidth={600}>
      {children}
    </MediaQuery>
  );
};

const LargeScreen = (props) => {
  const { children } = props;

  return (
    <MediaQuery minWidth={601}>
      {children}
    </MediaQuery>
  );
};

export {
  ExtraSmallScreen,
  LargerThan500Screen,
  SmallScreen,
  LargeScreen,
};

LargerThan500Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ExtraSmallScreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

SmallScreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

LargeScreen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
