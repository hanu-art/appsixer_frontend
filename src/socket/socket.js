// src/socket/socket.js
import { io } from "socket.io-client";

export const socket = io(
  import.meta.env.VITE_API_BASE_URL?.replace("/api", "") ||
    "http://localhost:3000",
  {
    withCredentials: true,
    autoConnect: false,
  }
);
