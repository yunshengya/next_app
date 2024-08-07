'use client'
// 客户端渲染
import React, { useEffect, useState } from 'react'
const Home = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setTimeout(() => {
      setData({ id: 1 })
    }, 5000);
  })
  return <>
    {data ? <span id='test'>{data.id}</span> : 'Loading'}
  </>
}

export default Home
