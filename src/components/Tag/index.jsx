import React from 'react';
import PropTypes from 'prop-types';

export default function Tag({ onClick, className, title }) {
  return (
    <button className="py-1">
      <div
        className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800"
      >
        <a className="" href="#">#hogehoge</a>
      </div>
    </button>
  )
}

Tag.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}
