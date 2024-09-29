import axios from 'axios';
import { PostCardProps } from '../types/PostCardProps';

const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchPosts = async (): Promise<PostCardProps[]> => {
  const response = await axios.get(`${API_BASE_URL}/api/posts`);
  return response.data.data;
};

export const fetchPostDetails = async (id: string): Promise<PostCardProps> => {
  const response = await axios.get(`${API_BASE_URL}/api/posts/${id}`);
  return response.data.data;
};

