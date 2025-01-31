'use client'
import React from 'react'
import Image from 'next/image'
import { getImageUrl } from '@/utils/supabase/storage'
import { useMutation } from '@tanstack/react-query'
import { deleteFiles } from '@/actions/storageAction'
import { queryClient } from '@/app/config/ReactQueryClientProvider'

export default function ImgItem({img}) {

    const deleteFileMutation = useMutation({
        mutationFn: deleteFiles,
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['images'],
          });
        }
    })

    return (
    <div className='border-dotted border-blue-400 border-2 h-48 rounded-xl relative overflow-hidden'>
        <div className='w-full h-full object-cover '>
      <Image alt = "dropbox-icons" src = {getImageUrl(img.name)} width={50} height={50} className='w-full h-full aspect-square'></Image>
        </div>
        <button onClick={() => {
          deleteFileMutation.mutate(img.name)
        }} className='absolute top-1 right-2 bg-red-600 text-white p-1 rounded-lg' type = "button">삭제</button>
        <p className='absolute bottom-0 text-white w-full p-2 bg-blue-600'>{img.name}</p>
    </div>
  )
}
