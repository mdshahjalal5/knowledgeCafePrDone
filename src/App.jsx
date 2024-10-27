import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Blogs/Bookmarks";

import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header name="shah"></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs></Blogs>
        {/* <Bookmarks></Bookmarks> */}
      </div>
    </>
  );
}

export default App;
