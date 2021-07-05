import React from 'react';
import Breadcrumb from '@components/Breadcrumb/index';
import PropTypes from 'prop-types';

export default function PageContainer({ title, pathname='', children }) {
  return (
    <div className="flex flex-col md:ml-64">
      {title && <h1 className="pt-5 pl-5 font-semibold text-xl leading-tight sm:leading-normal">{title}</h1>}
      <Breadcrumb pathname={pathname}/>
      {children}
    </div>
  )
}

PageContainer.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string,
}
