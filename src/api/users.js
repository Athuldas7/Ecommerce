export const getUsers = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/users');
    return response.json();
  };
  