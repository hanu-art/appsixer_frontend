import apiClient from "./axios";

/**
 * Admin Register
 * Backend: POST /register
 */
export const registerAdmin = async (payload) => {
  const response = await apiClient.post('/auth/register', payload, {
    withCredentials: true,
  });
  return response.data;
};

/**
 * Admin Login
 * Backend: POST /login
 */
export const loginAdmin = async (payload) => {
  const response = await apiClient.post('/auth/login', payload, {
    withCredentials: true,
  });
  return response.data;
};

/**
 * Admin Logout
 * Backend: POST /logout
 */
export const logoutAdmin = async () => {
  const response = await apiClient.post('/auth/logout', {
    withCredentials: true,
  });  
 console.log('Logout response:', response);
  return response.data;
};

/**
 * Get Logged-in Admin (Session Restore)
 * Backend: GET /me
 */
export const getMe = async () => {
  const response = await apiClient.get('/auth/me', {
    withCredentials: true,
  });
  return response.data;
};
