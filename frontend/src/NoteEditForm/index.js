import React from 'react';
import { TodoContext } from '../NoteContext';
import './NoteEditForm.css';

function NoteEditForm() {
    const {
      setOpenEditModal,
      editNote
    } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
  
    const onSubmit = (event) => {
      event.preventDefault();
      editNote(newTodoValue);
      setOpenEditModal(false);
    };
  
    const onCancel = () => {
      setOpenEditModal(false);
    };
  
    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
  
    return (
      <form onSubmit={onSubmit}>
        <label>Edit the note</label>
        <textarea
          placeholder="Type here the new text"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >Cancel</button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >Add</button>
        </div>
      </form>
    );
  }

export { NoteEditForm };