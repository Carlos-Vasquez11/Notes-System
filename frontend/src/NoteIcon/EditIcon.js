import React from 'react';
import { NoteIcon } from '.';

function EditIcon({ onEdit }) {
  return (
    <NoteIcon
      type="edit"
      color="gray"
      onClick={onEdit}
    />
  );
}

export { EditIcon };