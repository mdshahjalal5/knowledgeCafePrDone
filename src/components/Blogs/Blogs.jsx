import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "./Bookmarks";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);

  const addBookMarks = (book) => {
    // console.log(book)
    setBookMarks([...bookMarks, book]);
  };

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex  mt-6">
      <div className="w-2/3">
        <h2>Total Blogs {blogs.length}</h2>
        {blogs.map((blog) => (
          <Blog addBookMarks={addBookMarks} blog={blog} key={blog.id}></Blog>
        ))}
      </div>
      <div className="w-1/3 bg-gray-500 rounded-s ml-4">
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </div>
  );
};

export default Blogs;
