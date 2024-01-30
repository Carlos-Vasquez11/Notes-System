// FilterButtons/index.js
import React, { useContext } from 'react';
import { TodoContext } from '../NoteContext'; // Asegúrate de ajustar la ruta correcta
import './FilterButtons.css';

function FilterButtons() {
  const { fetchType, setFetchType } = useContext(TodoContext);

  const handleButtonClick = (type) => {
    setFetchType(type);
  };

  return (
    <div className='filter-buttons'>
      <button
        className={fetchType === 0 ? 'active' : ''}
        onClick={() => handleButtonClick(0)}
      >
        Active
      </button>
      <button
        className={fetchType === 1 ? 'active' : ''}
        onClick={() => handleButtonClick(1)}
      >
        Archived
      </button>
      <button
        className={fetchType === 2 ? 'active' : ''}
        onClick={() => handleButtonClick(2)}
      >
        All
      </button>
    </div>
  );
}

export default FilterButtons;
