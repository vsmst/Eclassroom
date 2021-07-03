import React from 'react'

export default function SimpleCard({ children, className = '' }) {
  return (
  <div class={`bg-white rounded-md tracking-wide shadow-lg ${className}`}>
    {children}
  </div>
  )
}
