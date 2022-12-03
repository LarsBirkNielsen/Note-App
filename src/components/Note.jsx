import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";


//Defining how my Note will look like
//We are "catching/recieving" the props as params here, when we create a "Note" in the App.jsx so they ned to have the same in name as in App.jsx
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;

