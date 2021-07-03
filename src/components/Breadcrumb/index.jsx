import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Breadcrumb({ pathname = '' }) {
  const history = useHistory();
  const parts = pathname || history.location.pathname.split('/');

  return (
    <div className="py-3 px-5 mb-4 text-gray-900 text-sm">
      <ul className="flex">
        <li><Link to="/" className="underline font-semibold">Home</Link></li>
        {parts.map((p) => {
          if (parts.length - 1 === parts.indexOf(p)) return (<li>{p}</li>);
          const to = `/${parts.slice(0, parts.indexOf(p) + 1).filter(e => e).join('/')}`
          return (
            <>
              <li><Link to={to} className="underline font-semibold">{p}</Link></li>
              <li><span className="mx-2">/</span></li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

Breadcrumb.propTypes = {
  pathname: PropTypes.string,
}
