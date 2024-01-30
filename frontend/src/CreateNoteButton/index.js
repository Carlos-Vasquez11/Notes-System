import { TodoContext } from '../NoteContext';
import React from 'react';
import './CreateNoteButton.css';

function CreateNoteButton() {

  const {openModal, setOpenModal} = React.useContext(TodoContext)

  return (
    <button className="CreateTodoButton" onClick={() => setOpenModal(!openModal)}>+</button>
  );
}

export { CreateNoteButton };