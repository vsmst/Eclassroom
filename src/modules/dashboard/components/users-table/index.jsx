import React from 'react';
import Table from '@components/table/index';
import { PrepareDataForUserTable } from './utils/prepate-data-for-table';

export default function UsersTable({ data }) {
  const d = PrepareDataForUserTable({ data });
  return (
    <div>
      <h1>Users Info</h1>
      <Table data={d} />
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, deserunt?</p>
    </div>
  )
}
