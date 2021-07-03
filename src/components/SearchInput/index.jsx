import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ onChange, className, placeholder = '' }) {
  return (
    <div class={`container relative left-0 z-50 flex wh-auto ${className}`}>
      <div class="relative flex items-center w-full lg:w-64 h-full group">
        <FaSearch class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" />
        <input onChange={onChange} type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search"/>
      </div>
    </div>
  )
}
