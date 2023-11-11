import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario')

  // useEffect function runs EVERY TIME there is a render of the component,
  // such as whenever the state changes and causes a render, useEffect runs
  useEffect(function () {
    console.log("Entered useEffect function...")
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log("Data: ", data);
        setBlogs(data)
      })
  }, [])

  function handleDelete(blogId) {
    console.log("Entered handleDelete function...");
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  }

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" deleteHandler={handleDelete} />}
      <button className="btn" onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
