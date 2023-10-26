import React from "react";

const BlogList = function ({ blogs, title, deleteHandler }) {
  console.log("Entered BlogList component...");
  console.log("Blogs: ", blogs);

  return (
    <React.Fragment>
      <div className="blog-list">
        <h2>{title}</h2>

        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button
              onClick={function () {
                deleteHandler(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default BlogList;
