import "./App.css";
import Blogs from "./components/Blogs/Blogs";

import Header from "./components/Header/Header";
function App() {
  return (
    <>
      <Header name="shah"></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
