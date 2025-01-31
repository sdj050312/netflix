'use client'
import React from 'react'

export default function Search({search, setSearch}) {
  return (
    <div className='w-full flex p-2 justify-center items-center'>
      <input type="text" value = {search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Image...' className='border-solid border-black border-2 rounded-xl p-1 w-full'/>
    </div>
  )
}
