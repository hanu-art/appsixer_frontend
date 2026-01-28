import apiClient from "../axios";


/**
 * 🔹 Admin Inbox
 * GET /api/chat/admin/inbox
 */
export const getAdminInbox = () => {
  return apiClient.get("/chat/admin/inbox");
};

/**
 * 🔹 Assign conversation to admin
 * POST /api/chat/admin/assign
 * body: { conversationId }
 */
export const assignConversation = (conversationId) => {
  return apiClient.post("/chat/admin/assign", {
    conversationId,
  });
};

/**
 * 🔹 Fetch messages of a conversation
 * GET /api/chat/conversation/:conversationId/messages
 */
export const getConversationMessages = (conversationId) => {
  return apiClient.get(
    `/chat/conversation/${conversationId}/messages`
  );
};

/**
 * 🔹 Admin sends a message
 */
export const sendAdminMessage = ({ conversationId, message }) => {
  return apiClient.post("/chat/admin/message", {
    conversationId,
    senderType: "admin", // ✅ ONLY HERE
    message,
  });
};
/**
 * 🔹 Mark messages as read (admin)
 * PATCH /api/chat/message/read
 */
export const markConversationReadByAdmin = (conversationId) => {
  return apiClient.patch("/chat/message/read", {
    conversationId,
    readerType: "admin",
  });
};