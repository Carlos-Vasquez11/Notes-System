function usePost() {
  const postRequest = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error(`HTTP error! Status: ${response.status}`);
        const responseBody = await response.text();
        console.error('Response Body:', responseBody);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.log("errores");
      console.error('Error in usePost:', error);
      throw error;
    }
  };

  return { postRequest };
}

export { usePost };
