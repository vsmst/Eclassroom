import React from 'react';

const COLORS = {
  violet: 'text-indigo-500 bg-indigo-50',
  red: 'text-red-500 bg-red-50',
  green: 'text-green-500 bg-green-50',
}

const Chip = ({ text, color = 'violet'}) => {
  return (
    <span className={`px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full ${COLORS[color]}`}>{ text }</span>
  );
}

export default Chip;
