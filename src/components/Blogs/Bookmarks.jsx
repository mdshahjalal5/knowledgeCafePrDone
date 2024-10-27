const Bookmarks = ({ bookMarks }) => {
  console.log(bookMarks);
  return (
    <div>
      <h1>Hello, I am Marks</h1>
      {bookMarks && bookMarks.length ? (
        bookMarks.map((bookMark, index) => (
          <p className="bg-red-100 p-4 m-4 rounded" key={index}>
            {bookMark.title}
          </p>
        ))
      ) : (
        <p className="bg-red-100 p-4 m-4 rounded-s">No bookmarks available.</p>
      )}
    </div>
  );
};

export default Bookmarks;
