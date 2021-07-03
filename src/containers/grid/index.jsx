import React from 'react'

export default function Grid({ children }) {
  return (
    <div className="flex flex-row p-6 flex-wrap">
      {children}
    </div>
  )
}
