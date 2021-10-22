import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import VanillaTilt from 'vanilla-tilt';

const Tilt = (props) => {
  const {
    options, children, className, style,
  } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <p ref={tilt} className={className} style={style}>
      {children}
    </p>
  );
};

export default Tilt;

Tilt.propTypes = {
  options: PropTypes.shape({}),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

Tilt.defaultProps = {
  options: {},
  style: {},
};
