import { FaBookmark } from "react-icons/fa";
export default function Blog({ blog }) {
  console.log(blog);
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
          <button className="ml-2">
            <FaBookmark className="text-2xl" />
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
    </div>
  );
}
