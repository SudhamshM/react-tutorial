import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  // useEffect function runs EVERY TIME there is a render of the component,
  // such as whenever the state changes and causes a render, useEffect runs
  useEffect(function () {
    console.log("Entered useEffect function...")
    setTimeout(() => {
      fetch("http://localhost:8000/blogss")
        .then(res => {
          if (!res.ok) {
            throw Error("Could not fetch for that resource.")
          }
          return res.json()
        })
        .then(data => {
          console.log("Data: ", data);
          setBlogs(data);
          setIsPending(false)
          setError(null)
        })
        .catch((e) => {
          setError(e.message);
          setIsPending(false)
        })
    }, 1000);

  }, [])

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
