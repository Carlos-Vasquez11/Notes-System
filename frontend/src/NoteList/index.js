import './NoteList.css';

function NoteList({ children }) {
  return (
    <ul className="TodoList">
      {children}
    </ul>
  );
}

export { NoteList };