import React from 'react';
import Grid from '../containers/grid';
import PostCard from '@components/post-card/index';
import Sidebar from '@modules/Sidebar/index';

export default function index() {
  return (
    <div className="flex">
      <Sidebar />
      <Grid>
        <>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </>
      </Grid>
    </div>
  )
}
