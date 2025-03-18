'use client'
import { use } from 'react';
import React from 'react';
import Image from 'next/image';
 
export default function Posts({
  posts,
}: {
  posts: Promise<{ id: string; title: string; image:string; }[]>
}) {
  const allPosts = use(posts)
 
  return (
    <div className='flex flex-col grid grid-cols-3 gap-4'>
    
      {allPosts.map((post) => (
        <ul key={post.id}>
        
        <li >{post.title}</li>
        <li><Image src={`${post.image}`} alt={post.title} width={500} height={500} /></li>
        {/* <li><img src={post.image} alt={post.title} className='h-44 w-44' /></li> */}
        <li><p>{post.image}</p></li>
        </ul>

      ))}
    
   </div>
  )
}