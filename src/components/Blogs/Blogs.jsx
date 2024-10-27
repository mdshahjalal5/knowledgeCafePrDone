import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "./Bookmarks";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addBookMarks = (book) => {
    // console.log(book)
    setBookMarks([...bookMarks, book]);
  };
  const handleReadingTime = (blog) => {
    setReadingTime(readingTime + blog.reading_time);
    const newBookMarks = bookMarks.filter(
      (bookMark) => bookMark.id !== blog.id,
    );
    setBookMarks(newBookMarks);
  };
  console.log(readingTime);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex  mt-6">
      <div className="md:w-2/3">
        <h2>Total Blogs {blogs.length}</h2>
        {blogs.map((blog) => (
          <Blog
            addBookMarks={addBookMarks}
            handleReadingTime={handleReadingTime}
            blog={blog}
            key={blog.id}
          ></Blog>
        ))}
      </div>
      <div className="md:w-1/3 bg-gray-500 rounded-s ml-4">
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
};

export default Blogs;
