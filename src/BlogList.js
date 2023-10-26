import React from "react";

const BlogList = function ({ blogs, title, deleteHandler }) {
  console.log("Entered BlogList component...");
  console.log("Blogs: ", blogs);

  return (
    <React.Fragment>
      <div className="blog-list">
        <h2>{title}</h2>

        {blogs.map((blog) => (
          <div
            className="blog-preview"
            key={blog.id}
            style={{ position: "relative" }}
          >
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button
              className="createBtn"
              style={{
                position: "absolute",
                border: "none",
                top: "20%",
                right: "5%",
                cursor: "pointer",
              }}
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
