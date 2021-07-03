import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick, title = 'Primary', className }) {
  return (
  <button onClick={onClick} className={`cursor-pointer bg-gray-700 hover:bg-gray-600 px-5 py-2 inline-block text-blue-100 hover:text-white rounded ${className}`}>{title}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  pathname: PropTypes.string,
  className: PropTypes.string,
}
