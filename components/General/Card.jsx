import React from 'react'

export default function Card({color}) {
  return (
    <div className={`${color == 'green' ? 'bg-green-500' : 'bg-yellow-500'}
      rounded-lg w-60 h-20`}>
      s
    </div>
  )
}
