// src/api/contact.api.js
import apiClient from "./axios";

export const submitContact = async (payload) => {
  const response = await apiClient.post('/contacts', payload);
  return response.data;
};

