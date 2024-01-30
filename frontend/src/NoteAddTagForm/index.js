import React from 'react';
import { TodoContext } from '../NoteContext';
import './NoteEditForm.css';

function NoteAddForm() {
    const {
      setOpenAddTagModal,
      addTag
    } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');
  
    const onSubmit = (event) => {
      event.preventDefault();
      addTag(newTodoValue);
      setOpenAddTagModal(false);
    };
  
    const onCancel = () => {
      setOpenAddTagModal(false);
    };
  
    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
  
    return (
      <form onSubmit={onSubmit}>
        <label>Add a Tag</label>
        <textarea
          placeholder="New Tag"
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

export { NoteAddForm };