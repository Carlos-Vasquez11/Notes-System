// Importa usePost y useDelete al principio del archivo
import React, { useState, useEffect } from 'react';
import { usePost } from './usePost';
import useDelete from './useDelete';

function useFetch(url) {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setNotes(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { notes, setNotes, loading, error };
}

function useLocalStorage(itemName, initialValue) {
  const { notes, setNotes, loading, error } = useFetch("http://localhost:8080/notes/api/all");
  const [item, setItem] = React.useState(initialValue);
  const { postRequest } = usePost();
  const deleteService = new useDelete(); // Crea una instancia de useDelete

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        if (!notes) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          setItem(notes);
        }
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, [notes, itemName, initialValue]);

  const saveItem = async (newItem) => {
  //Refresh the Screen
    const newNotes = [...notes];
    if (!newNotes.some((nota) => nota.noteId === newItem.noteId)) {
      console.log("la metí");
      newNotes.push(newItem);
    }
      setNotes(newNotes);
      
    //Update the DDBB
    try {
      await postRequest('http://localhost:8080/notes/api/save', newItem);
    } catch (error) {
      console.error('Error in saveItem:', error);
    }

    //Update the Id
    try {
      const response = await fetch("http://localhost:8080/notes/api/all");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.log(error);
    } 
  };

  const deleteItem = async (id) => {
    try {
      // Elimina la nota localmente
      const updatedNotes = item.filter(note => note.noteId !== id);
      setItem(updatedNotes);

      // Envía la solicitud DELETE al servidor
      await deleteService.deleteItem(id);
      setNotes(updatedNotes)
    } catch (error) {
      console.error('Error in deleteItem:', error);
    }
    
  };

  return {
    item,
    saveItem,
    deleteItem,
    loading,
    error,
    notes,
    setNotes
  };
}

export { useLocalStorage };
