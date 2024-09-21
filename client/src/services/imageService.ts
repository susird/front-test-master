import axios from 'axios';

export interface Image {
  id: number;
  title: string;
  liked?: boolean;
  price: number;
  likes_count: number;
  author: string;
  main_attachment: {
    big: string;
  };
  links: { rel: string; uri: string }[];
}

const apiClient = axios.create({
  baseURL: 'http://localhost:3100',
});

export const getImages = async (page: number): Promise<Image[]> => {
  try {
    const response = await apiClient.get('/images', {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error getting images', error);
    throw error;
  }
};

export const likeImage = async (id: number) => {
  try {
    const response = await apiClient.post(`/images/${id}/likes`);
    return response;
  } catch (error) {
    console.log('Error liking image', error);
    throw error;
  }
};
