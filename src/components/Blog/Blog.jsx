export default function Blog({blog}) {
  console.log(blog)
  const {cover, title, author_img, posted_date, reading_time} = blog;
  return (
   <div>
    <img src={cover} alt=""/>
    </div>
  )
}


