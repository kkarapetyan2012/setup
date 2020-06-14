import React from "react";
import { Image } from "../../../../assets/images/icons";
import "./BlogItem.scss";

const BlogItem = () => (
  <div className="blogItem">
    <div className="blogImageBlock">
      <img src={Image} alt="" />
    </div>
    <div className="blogDescriprtion">
      <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry</p>
      <a href="">Read more</a>
    </div>
  </div>
);

export default BlogItem;
