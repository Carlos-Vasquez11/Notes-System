import React from 'react';
import './NoteSearch.css';
import { TodoContext } from '../NoteContext';

function NoteSearch() {

  const {searchValue,
         setSearchValue
        } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Search for a tag"
      className="TodoSearch"
      value = {searchValue}
      onChange={ (event) => {setSearchValue(event.target.value)}}
    />
  );
}

export { NoteSearch };