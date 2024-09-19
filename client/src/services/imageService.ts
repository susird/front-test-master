import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3100',
});

export const getImages = async (search: string, page: number) => {
  try {
    const response = await apiClient.get('/images', {
      params: {
        page,
        search,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error getting images', error);
    throw error;
  }
};
