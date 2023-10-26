import { useState } from "react";
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

  function handleDelete(blogId) {
    console.log("Entered handleDelete function...");
    setBlogs(blogs.filter((blog) => blog.id !== blogId));
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" deleteHandler={handleDelete} />
    </div>
  );
};

export default Home;
