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

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};


export async function getComments(postId) {
  const res = await axiosInstance.get(`/comments/${postId}`);
  return res.data;
}

export async function postComment(postId, content) {
  await axiosInstance.post(`/comments/${postId}`, { content });
}

export async function deleteComment(postId, commentId) {
  await fetch(`${BASE_URL}/comments/${postId}?comment_id=${commentId}`, {
    method: "DELETE",
    headers,
  });
}

