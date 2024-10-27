import { FaBookmark } from "react-icons/fa";
export default function Blog({ blog, addBookMarks, handleReadingTime }) {
  const {
    cover,
    hashtags,
    title,
    author_img,
    posted_date,
    reading_time,
    author,
  } = blog;
  return (
    <div className="py-4">
      <img src={cover} className="w-full" alt="" />
      <div className="flex justify-between mt-6">
        <div className="flex">
          <img src={author_img} className="w-14" alt="" />
          <div className="ml-6">
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read </span>
          <button onClick={() => addBookMarks(blog)} className="ml-2 text-2xl">
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-semibold pt-10 pb-4"> {title}</h2>
      <p className="mb-3">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>

      <button
        onClick={() => handleReadingTime(blog)}
        className="bg-purple-400 p-1 ml-2 rounded"
      >
        Mark As Read
      </button>
    </div>
  );
}
