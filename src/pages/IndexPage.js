import React from 'react'
import { useEffect, useState } from 'react'
import Post from '../components/post/Post'

export default function IndexPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts)
      })
      .catch((error) => {
        console.log('Error fetching posts:', error)
      })
  }, [])

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => <Post key={index} {...post} />)}
    </>
  )
}
