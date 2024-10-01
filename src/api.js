import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchKanbanData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
    console.log(response);
  } catch (error) {
    console.error('Error fetching Kanban data', error);
    throw error;
  }
};
