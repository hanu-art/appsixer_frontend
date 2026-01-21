import apiClient from './axios';

/**
 * Admin – Get all contacts
 * Backend: GET /admin/contacts
 */
export const getAllContacts = async ({ page = 1, limit = 10 }) => {
  const response = await apiClient.get("/admin/contacts", {
    params: { page, limit },
    withCredentials: true,
  });
  return response.data;
};

/**
 * Admin – Get latest contacts
 * Backend: GET /admin/contacts/latest
 */
export const getLatestContacts = async () => {
  const response = await apiClient.get('/admin/contacts/latest', {
    withCredentials: true,
  });
  return response.data;
};

/**
 * Admin – Get single contact by ID
 * Backend: GET /admin/contacts/:id
 */
export const getContactById = async (id) => {
  if (!id) throw new Error('Contact ID is required');

  const response = await apiClient.get(`/admin/contacts/${id}`, {
    withCredentials: true,
  });
  return response.data;
};




export const updateContactStatus = async (id, status) => {
  if (!id) throw new Error('Contact ID is required');
  if (!status) throw new Error('Status is required');

  const response = await apiClient.patch(
    `/contacts/${id}/status`,
    { status },
    {
      withCredentials: true, // cookie-based auth
    }
  );

  return response.data;
}