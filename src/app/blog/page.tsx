//'use client'
import Posts from '@/app/ui/posts'
import { getPosts } from '@/db/data'
import { Suspense } from 'react'
 
export default function Page() {
  // Don't await the data fetching function
  //const posts = getPosts()
  const posts = getPosts().then(data =>
    data.map(post => ({ id: post.id, title: post.title }))
  )
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}