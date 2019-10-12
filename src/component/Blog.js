import React, { useState, useEffect } from "react";
import arrow from "../image/arrow.png";
import butter from "../butter-client";
import { Link } from "react-router-dom";

const Blog = () => {
  const [classList, setClassList] = useState(["container limited"]);
  const [posts, setPosts] = useState();

  useEffect(() => {
    butter.post
      .list({ page: 1, page_size: 5 })
      .then(res => {
        console.log(res.data.data);
        setPosts(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={"section"}>
        <div className={classList}>
          <h2>Blog</h2>
          <div className={"columns is-multiline blog is-centered"}>
            {posts
              ? posts.map(post => (
                  <div className={"column is-5-desktop is-11-tablet"}>
                    <h3>{post.title}</h3>
                    <p> Read More</p>
                  </div>
                ))
              : null}
          </div>

          <div className={"more-fade"}>
            <Link to="/blog" className={"more-button"}>
              <img src={arrow} className={"arrow"} alt="down arrow"></img>
              <span className={"more"}>MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
