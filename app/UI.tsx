"use client"
import Header from '@/components/Header'
import Search from '@/components/Search'
import ImgList from '@/components/imgList'
import DropFileImg from '@/components/DropFileImg'
import React, { useState } from 'react'

export default function UI() {
    const [search, setSearch] = useState("");
  return (
    <div>
      <Header></Header>
      <Search search = {search} setSearch = {setSearch}></Search>
      <DropFileImg></DropFileImg>
      <ImgList search= {search}></ImgList>
    </div>
  )
}
