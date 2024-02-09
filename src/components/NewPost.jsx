import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost(props) {
  const [enteredbody, setEntered] = useState("");
  const [auther, setAuther] = useState("");

  function bodychangehandler(event) {
    setEntered(event.target.value);
  }
  function autherhandler(event) {
    setAuther(event.target.value);
  }
  function submithandler(event) {
    event.preventDefault();
    const postdata = {
      body: enteredbody,
      auther: auther,
    };
    props.onAddpost(postdata);
    props.onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodychangehandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={autherhandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
