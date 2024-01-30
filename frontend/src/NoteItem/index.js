import React from 'react';
import { CompleteIcon } from '../NoteIcon/CompleteIcon'
import { DeleteIcon } from '../NoteIcon/DeleteIcon'
import { EditIcon } from '../NoteIcon/EditIcon'
import { AddIcon } from '../NoteIcon/Add';
import { TodoContext } from '../NoteContext';
import './NoteItem.css';

function NoteItem(props) {
  const { removeTag } = React.useContext(TodoContext);

  return (
    <li className="TodoItem">
      {/* Parte superior */}
      <div className="NoteHeader">
        <CompleteIcon archived={props.archived} onComplete={props.onComplete} />
        <p className={`TodoItem-p ${props.archived && "TodoItem-p--complete"}`}>
          {props.description}
        </p>
        <DeleteIcon onDelete={props.onDelete} />
        <AddIcon onAdd={props.onAdd} />
        <EditIcon onEdit={props.onEdit} />
      </div>

      {/* Parte inferior (tags) */}
      <div className="TagsContainer">
        {props.tags.map((tag, index) => (
          <div key={index} className="TagItem">
            <span onClick={() => removeTag(index, props.noteId)}>
              <span>{tag} </span> 
              <span className="DeleteTag"> X </span>
            </span>
          </div>
        ))}
      </div>
      
    </li>
  );
}

export { NoteItem };