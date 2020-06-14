import React from "react";
import "./BlogList.scss";
import { BlogItem } from "./components/blog-item";

const BlogList = () => (
  <div className="blogList d-flex flex-column align-items_center">
      <h2>Blog</h2>
      <div className="blogContainer d-flex flex-wrap justify-content_space-between">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>    

  </div>
);

export default BlogList;
