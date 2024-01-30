import React from 'react';
import { NoteIcon } from '.';

function CompleteIcon({ archived, onComplete }) {
  return (
    <NoteIcon
      type="check"
      color={archived ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };