import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
    //We use this for our zoom function
    const [isExpanded, setExpanded] = useState(false);


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
      //Getting the event.target.name AND event.target.value with this destructured array 
    const { name, value } = event.target;

    //Adding to our note 
    //Recieving the previous notes
    setNote(prevNote => {
        //Adding to existing note. If we are writing in title input the note.title will get update and the same if we are writing in the content input
      return {
        ...prevNote,
        //[event.target.name]: value of that inputfield
        [name]: value
      };
    });
  }

  function submitNote(event) {
      //Callinng the addNote function in app.jsx.
    props.onAdd(note);
    //Clearing the title and content when we have added a Note
    setNote({
      title: "",
      content: ""
    });
    //Stops the page to refresh
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }


return (
    <div>
      <form className="create-note">
      {/*If expanded is true show line 54-59 else we render null*/ }
        {isExpanded ?
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          /> : null }

        <textarea
          name="content"
          //When we click in the textarea we call the expand function
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          //If expaneded is true the textArea is 3 row big else 1 row big
          rows={isExpanded ? 3 : 1}
        />
        {/* If expanded is true, show the fab icon with zoom effect*/ }
        <Zoom in={isExpanded}>
          {/*Sending our created Note back to the App.jsx */ }
          <Fab onClick={submitNote}> {/*Fab is a floating action button from material design */ }
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

