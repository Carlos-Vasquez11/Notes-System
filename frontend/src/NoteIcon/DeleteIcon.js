import React from 'react';
import { NoteIcon } from '.';

function DeleteIcon({ onDelete }) {
  return (
    <NoteIcon
      type="delete"
      color="gray"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };