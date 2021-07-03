import React from 'react';
import Grid from '@/containers/grid';
import PostCard from '@components/post-card/index';
import PageContainer from '@containers/Page/index';
import SearchInput from '@components/SearchInput/index';
import SimpleCard from '@components/SimpleCard';
import Button from '@components/Button';

export default function SubjectsPage() {
  const search = (e) => console.log(e.target.value);

  return (
    <PageContainer title="Subjects">
      <div className="bg-gray-100">
        <SimpleCard className="m-10 flex">
          <SearchInput onChange={search} className='w-full m-6' />
          <Button className="m-6 ml-0" title="Search" />
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
