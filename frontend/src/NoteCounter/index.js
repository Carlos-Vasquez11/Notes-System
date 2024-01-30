import { TodoContext } from '../NoteContext';
import './NoteCounter.css';
import React from 'react';

function NoteCounter() {
  const { totalNotes
        } = React.useContext(TodoContext);
  
  if(totalNotes <= 1)
    return (
    <h1 className="TodoCounter">
      There is <span>{totalNotes}</span> Note
    </h1>
  );

  else{
    return (
      <h1 className="TodoCounter">
        There are <span>{totalNotes}</span> Notes
      </h1>
    );
  }
  
}

export { NoteCounter };