import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    saveItem,
    deleteItem,
    notes,
    loading,
    error,
  } = useLocalStorage('Notes', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [openAddTagModal, setOpenAddTagModal] = React.useState(false);
  const [editingNote, setEditingNote] = React.useState(-1);
  const [fetchType, setFetchType] = React.useState(0);

  const archivedNotes = notes.filter(
    todo => !!todo.archived
  ).length;
  const totalNotes = notes.length;

  const searchedNotes = notes.filter((note) => {
    const noteTags = note.tags.map(tag => tag.toLowerCase());
    const searchText = searchValue.toLowerCase();
  
    // Agregar condiciones según el valor de fetchType
    if (fetchType === 0) {
      return !note.archived && (searchText === '' || noteTags.some(tag => tag.includes(searchText)));
    } else if (fetchType === 1) {
      return note.archived && (searchText === '' || noteTags.some(tag => tag.includes(searchText)));
    } else {
      return searchText === '' || noteTags.some(tag => tag.includes(searchText));
    }
  });
  

  const completeNote = (noteId) => {
    const noteIndex = notes.findIndex(
      (note) => note.noteId === noteId
    );

    notes[noteIndex].archived = !notes[noteIndex].archived;
    saveItem(notes[noteIndex]);
  };

  const deleteNote = (noteId) => {
    deleteItem(noteId);
  };

  const removeTag = (tagIndex, noteId) => {
    const noteIndex = notes.findIndex(
      (note) => note.noteId === noteId
    );

    notes[noteIndex].tags.splice(tagIndex,1)
    saveItem(notes[noteIndex]);
  }

  const addNote = (description) => {
    const Note = {
      "archived": false,
      "description": description,
      "tags": []
    }
    saveItem(Note);
  };

  const findEditingNote = (note, type) => {
    let index = notes.findIndex(noteInArray => noteInArray.noteId === note.noteId);
    setEditingNote(index);

    if(type === 1){
      setOpenEditModal(true);
    }else{
      setOpenAddTagModal(true);
    }
    
  }

  const editNote = (newDescription) => {
    const index = editingNote;
    const newTodos = [...notes];
    newTodos[index].description = newDescription;
    saveItem(newTodos[index]);
  }

  const addTag = (newTag) => {
    const index = editingNote;
    const newTodos = [...notes];
    newTodos[index].tags.push(newTag);
    saveItem(newTodos[index]);
  }
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      addNote,
      findEditingNote,
      editingNote,
      editNote,
      addTag,
      setEditingNote,
      archivedNotes,
      totalNotes,
      searchValue,
      setSearchValue,
      searchedNotes,
      completeNote,
      deleteNote,
      openModal,
      setOpenModal,
      openEditModal,
      setOpenEditModal,
      openAddTagModal,
      setOpenAddTagModal,
      fetchType,
      setFetchType,
      removeTag
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
