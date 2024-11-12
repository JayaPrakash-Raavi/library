import { getPosts } from '@/_actions/postAction';
import React from 'react'

async function page() {
  const res= await getPosts();
  console.log(res)
  return (
    <div>page</div>
  )
}

export default page