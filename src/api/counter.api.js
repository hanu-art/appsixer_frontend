import apiClient from "./axios";  

export const getContactsStats = async () => {
  const response = await apiClient.get('/contacts/stats');
  return response.data;
};