import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

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

export { SmallScreen, LargeScreen };

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
