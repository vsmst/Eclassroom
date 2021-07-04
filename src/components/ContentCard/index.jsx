import React from 'react'
import SimpleCard from '@components/SimpleCard';
import Image from './Image';

export default function index({ className, children }) {
  return (
    <div className='p-5'>
      <div className='w-96 m-auto'>
        <SimpleCard className="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Image />
        <div className="col-span-3 row-span-1">
          <header
            className="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Title
              </a>
            </h1>
            <p className="text-grey-darker text-sm">9 min ago</p>
          </header>
        </div>
          {children}
        </SimpleCard>
      </div>
    </div>
  )
}
