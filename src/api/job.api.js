import apiClient from "./axios";
export const fetchJobs = (page = 1, limit = 8) => {
  return apiClient.get(`/jobdiva/jobs?page=${page}&limit=${limit}`);
};

export const fetchJobById = (id) => {
  return apiClient.get(`/jobdiva/jobs/${id}`);
};

export const fetchJobsCount = () => {
  return apiClient.get('/jobdiva/jobs/count');
};