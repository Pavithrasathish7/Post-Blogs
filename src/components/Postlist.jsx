import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./Postlist.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function Postlist({ isPosting, onClosed }) {
  const [posts, setPosts] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      setIsFetch(true);
      const response = await fetch("http://localhost:8080/posts");
      const resdata = await response.json();
      setPosts(resdata.posts);
      setIsFetch(false);
    }
    fetchdata();
  }, []);

  function posthandler(postdata) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevstate) => [postdata, ...prevstate]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onClosed}>
          <NewPost onCancel={onClosed} onAddpost={posthandler} />
        </Modal>
      )}
      {!isFetch && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} auther={post.auther} msg={post.body} />
          ))}
        </ul>
      )}
      {!isFetch && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There is No post yet</h2>
          <p>Star adding some</p>
        </div>
      )}
      {isFetch && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Data is Loading....</p>
        </div>
      )}
    </>
  );
}

export default Postlist;
