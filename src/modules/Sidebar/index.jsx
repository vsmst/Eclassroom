import React from 'react';
import Title from './components/title/index';
import Link from './components/link/index';
import { LINKS } from './constants/links';
import PropTypes from 'prop-types';

const Sidebar = ({ links = LINKS }) => {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
      <div className="flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div>💻| EclassRoom</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {links.map((l) => (
              l.type === 'title'
                ? <Title text={l.text} />
                : <Link text={l.text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Sidebar;
