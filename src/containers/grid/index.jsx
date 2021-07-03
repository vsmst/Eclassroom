import React from 'react'

export default function Grid({ className, children}) {
  return (
    <div className={`flex flex-row p-6 flex-wrap ${className}`}>
      {children}
    </div>
  )
}
