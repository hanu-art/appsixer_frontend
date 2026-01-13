import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/admin/login/Login";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
const AdminRoutes = () => {
  const isAuthenticated = true; // testing ke liye

  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route
        path="dashboard"
        element={
          isAuthenticated ? <AdminDashboard/> : <Navigate to="/admin/login" replace />
        }
      />

      {/* /admin hit */}
      <Route
        path=""
        element={
          <Navigate
            to={isAuthenticated ? "/admin/dashboard" : "/admin/login"}
            replace
          />
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
