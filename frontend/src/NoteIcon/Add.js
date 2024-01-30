import React from 'react';
import { NoteIcon } from '.';

function AddIcon({ onAdd }) {
  return (
    <NoteIcon
      type="add"
      color="gray"
      onClick={onAdd}
    />
  );
}

export { AddIcon };