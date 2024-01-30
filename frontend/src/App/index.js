import React from 'react';
import { NoteCounter } from '../NoteCounter';
import { NoteSearch } from '../NoteSearch';
import { NoteList } from '../NoteList';
import { NoteItem } from '../NoteItem';
import { NotesLoading } from '../NoteLoading';
import { NotesError } from '../NotesError';
import { EmptyNotes } from '../EmptyNotes';
import { CreateNoteButton } from '../CreateNoteButton';
import { TodoContext, TodoProvider } from '../NoteContext';
import { Modal } from '../Modal';
import './App.css';
import { NoteForm } from '../NoteForm';
import { NoteEditForm } from '../NoteEditForm';
import { NoteAddForm } from '../NoteAddTagForm';
import FilterButtons from '../FilterButtons';

function App() {

  const { openModal, 
          openEditModal, 
          openAddTagModal,
          loading, 
          error, 
          searchedNotes, 
          completeNote, 
          deleteNote, 
          findEditingNote} = React.useContext(TodoContext);

  return (
    <>
      <NoteCounter />
      <FilterButtons/>
      <NoteSearch />

      <NoteList>
        {loading && (
          <>
            <NotesLoading />
            <NotesLoading />
            <NotesLoading />
          </>
        )}
        {error && <NotesError/>}
        {(!loading && !error && searchedNotes.length === 0) && <EmptyNotes />}

        {searchedNotes.map(todo => (
          <NoteItem
            key={todo.description}
            description={todo.description}
            archived={todo.archived}
            tags={todo.tags}
            noteId={todo.noteId}
            onComplete={() => completeNote(todo.noteId)}
            onDelete={() => deleteNote(todo.noteId)}
            onEdit={() => findEditingNote(todo,1)}
            onAdd={() => findEditingNote(todo,2)}
          />
        ))}
      </NoteList>
      
      <CreateNoteButton />

      {openModal && (
        <Modal>
          <NoteForm/>
        </Modal>
      )}

      {openEditModal && (
        <Modal>
          <NoteEditForm/>
        </Modal>
      )}

      {openAddTagModal && (
        <Modal>
          <NoteAddForm/>
        </Modal>
      )}

    </>
  );
}

const AppWithProvider = () => (
  <TodoProvider>
    <App />
  </TodoProvider>
);

export default AppWithProvider;
