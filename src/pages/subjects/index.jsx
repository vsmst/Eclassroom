import React from 'react';
import Grid from '@/containers/grid';
import PostCard from '@components/post-card/index';
import PageContainer from '@containers/Page/index';
import SearchInput from '@components/SearchInput/index';
import SimpleCard from '@components/SimpleCard';

export default function SubjectsPage() {
  const search = (e) => console.log(e.target.value);

  return (
    <PageContainer title="Subjects">
      <div className="bg-gray-100">
        <SimpleCard className="m-10">
          <SearchInput onChange={search} className='w-full p-6' />
        </SimpleCard>
      </div>
      <Grid className="bg-gray-100">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
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
