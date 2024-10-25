import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
const Blogs = () => {
    const[blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data) )
  },[])
  
  return (
    <div>
      <h2>Total Blogs {blogs.length}</h2>
      {
        blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
      }
    </div>
  )
}

export default Blogs
