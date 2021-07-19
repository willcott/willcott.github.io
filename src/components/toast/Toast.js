import React from 'react';
import PropTypes from 'prop-types';

import './Toast.scss';

const Toast = (props) => {
  const { message, show } = props;
  return <div className={`toast${show ? ' show' : ''}`}>{message}</div>;
};

export default Toast;

Toast.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
};

Toast.defaultProps = {
  message: PropTypes.string,
  show: PropTypes.bool,
};
