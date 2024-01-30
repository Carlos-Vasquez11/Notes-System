class useDelete {
  constructor() {
    this.baseUrl = 'http://localhost:8080/notes/api/'; // Reemplaza con tu URL base
  }

  async deleteItem(id) {
    try {
      const response = await fetch(`${this.baseUrl}delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return true; // Puedes devolver cualquier cosa según tu lógica
    } catch (error) {
      console.error('Error in useDelete:', error);
      throw error;
    }
  }
}

export default useDelete;
