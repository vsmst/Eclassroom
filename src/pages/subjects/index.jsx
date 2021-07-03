import React from 'react';
import Grid from '@/containers/grid';
import PostCard from '@components/post-card/index';
import PageContainer from '@containers/Page/index';

export default function SubjectsPage() {
  return (
    <PageContainer title="Subjects">
      <Grid>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
      </Grid>
    </PageContainer>
  )
}
