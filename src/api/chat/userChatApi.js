// src/api/chat.api.js
import apiClient from "../axios";// ← tumhara existing client


export const createVisitor = () =>
  apiClient.post("/chat/visitor", {});

export const createConversation = (visitorId) =>
  apiClient.post("/chat/conversation", { visitorId });

export const getMessages = (conversationId) =>
  apiClient.get(`/chat/conversation/${conversationId}/messages`);

export const sendMessageApi = (payload) =>
  apiClient.post("/chat/message", payload);