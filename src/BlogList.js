import React from "react";

const BlogList = function (props) {
  console.log("Entered BlogList component...");

  const blogs = props.blogs;
  const title = props.title;

  console.log("Blogs: ", blogs);

  return (
    <React.Fragment>
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default BlogList;
