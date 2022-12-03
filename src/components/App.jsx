import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Our local db (array) of Notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    //We get all the previous values of our notes array
    setNotes(prevNotes => {
      //We insert all our previous Notes in the notes array AND the newNote
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
     //looping through each previous Notes, and getting a Note and its index, each iteration
    setNotes(prevNotes => {
       //Returning a new array without the note with the same index as the id we have as parameter for the deleteNote function
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/*We send the addNote function to the CreateArea.jsx as a prop. And its called onAdd in the CreateArea.jsx */ }
      <CreateArea onAdd={addNote} />
      {/*Iterates through our notes array and creates a Note component each interation */ }
      {notes.map((noteItem, index) => {
        return (
          <Note
          //We use the key and id to be able to delete a Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          //Adding our deleteNote function as "onDelete" so we can use it in our Note.jsx
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
