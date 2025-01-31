'use client';

import React from 'react';
import ImgItem from './imgItem';
import { useQuery } from '@tanstack/react-query';
import { searchFiles } from '@/actions/storageAction';

export default function ImgList({ search }) {
  const searchImageQuery = useQuery({
    queryKey: ['images', search],
    queryFn: () => searchFiles(search),
  });

  if (searchImageQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (searchImageQuery.isError) {
    return <p>Error loading images. Please try again later.</p>;
  }

  return (
    <div className="h-auto grid grid-cols-2 gap-2 m-1 justify-center items-center md:grid-cols-3 lg:grid-cols-4">
      {searchImageQuery.data.map((img) => (
        <ImgItem key={img.id} img={img} />
      ))}
    </div>
  );
}
