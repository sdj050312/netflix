'use client'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='flex p-2 items-center w-full '>
      <Image alt = "dropbox-icons" src = "/dropbox_icons.png" width={50} height={50} className='mr-4'></Image>
        <h1 className='mr-2 font-bold'>Drop Box</h1>
    </div>
  )
}
