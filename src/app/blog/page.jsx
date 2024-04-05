import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'


// FETCH DATA WITH AN API

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json()
}
export const metadata = {
  title: 'Blog Page',
  description: 'Blog desctription ',
}

const BlogPage = async () => {
  // FETCH DATA WITH AN API

  const posts = await getData()

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts()
  return (
    <div className={styles.container}>
      { posts.length > 0 && (

          posts.map((post)=>(
            <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
            </div>
          ) 

          )
      ) || (
         <span className={styles.noposts}>
          No Posts
        </span>
       
      )
     

      }
      
    </div>
  )
}

export default BlogPage
