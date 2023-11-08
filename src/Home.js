import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState('mario')

  // useEffect function runs EVERY TIME there is a render of the component,
  // such as whenever the state changes and causes a render, useEffect runs
  useEffect(function () {
    console.log("Entered useEffect function...")
    console.log("Blogs list: ", blogs)
  }, [name])

  function handleDelete(blogId) {
    console.log("Entered handleDelete function...");
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" deleteHandler={handleDelete} />
      <button className="btn" onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
