import React from 'react';
import UsersTable from './components/users-table/index';
import PricesChart from './components/prices-chart/index';

export default function Dashboard({ users, prices }) {
  return (
    <div>
      <UsersTable data={users} />
      <PricesChart prices={prices}/>
    </div>
  )
}
