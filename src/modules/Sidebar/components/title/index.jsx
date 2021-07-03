import React from 'react';
import PropTypes from 'prop-types';

const SideBarTitle = ({ text }) => {
  return (
    <li className="px-5">
      <div className="flex flex-row items-center h-8">
        <div className="text-sm font-light tracking-wide text-gray-500">{ text }</div>
      </div>
    </li>
  );
}

SideBarTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SideBarTitle;
