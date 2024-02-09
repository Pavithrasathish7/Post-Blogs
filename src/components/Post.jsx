import React from "react";
import classes from "./Post.module.css";

//const name = ["pavithra", "sathish"];

function Post(props) {
  //const choose = Math.random() > 0.5 ? name[0] : name[1];
  return (
    <div className={classes.post}>
      <h1 className={classes.auther}>{props.auther}</h1>
      <p className={classes.text}>{props.msg}</p>
    </div>
  );
}

export default Post;
