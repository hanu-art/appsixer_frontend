import apiClient from "./axios";



export const getDailyAnalytics = () => {
  return apiClient.get("/analytics/daily");
};

export const getMonthlyAnalytics = () => {
  return apiClient.get("/analytics/monthly");
};

export const getAnalyticsSummary = () => {
  return apiClient.get("/analytics/summary");
};