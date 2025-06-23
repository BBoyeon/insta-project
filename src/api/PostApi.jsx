// src/api/PostApi.jsx

import axios from 'axios';

const BASE_URL = 'https://rxlahlpuscpdneaxdrrk.functions.supabase.co';
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4bGFobHB1c2NwZG5lYXhkcnJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDczODYsImV4cCI6MjA2Mzk4MzM4Nn0.yyyRqGoCtrPjdCjSsxp4_vfNkAJ54PYxxfklB5ISpOQ';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getPosts = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axiosInstance.get(`/posts/${id}`);
  return res.data;
};

